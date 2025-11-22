import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env' });

/**
 * MULTI-PAGE GENERATOR - Enhanced Version
 * 
 * This script:
 * 1. Reads analysis data for ALL pages (Home, Projects, Tasks)
 * 2. Sends each to Gemini AI with a prompt
 * 3. Gets React component code back for each
 * 4. Saves components to src/pages/
 * 5. Sets up React Router for navigation
 * 
 * Usage: npm run generate
 */

async function generatePageComponent(genAI, pageName, analysisDir) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🤖 Generating ${pageName} Page Component...`);
    console.log('='.repeat(60));

    // Paths for this page
    const pageDir = path.join(analysisDir, pageName.toLowerCase());
    const screenshotPath = path.join(pageDir, 'screenshot.png');
    const structurePath = path.join(pageDir, 'structure.json');
    const stylesPath = path.join(pageDir, 'styles.json');

    // Check if files exist
    if (!fs.existsSync(screenshotPath) || !fs.existsSync(structurePath) || !fs.existsSync(stylesPath)) {
        console.error(`❌ Error: Missing analysis files for ${pageName} page!`);
        return null;
    }

    // Read analysis files
    console.log('📂 Reading analysis data...');
    const screenshot = fs.readFileSync(screenshotPath);
    const structure = JSON.parse(fs.readFileSync(structurePath, 'utf-8'));
    const styles = JSON.parse(fs.readFileSync(stylesPath, 'utf-8'));

    console.log('✅ Analysis data loaded');

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Create enhanced prompt
    console.log('📝 Creating AI prompt...');
    const prompt = `
You are an expert React developer tasked with recreating the ${pageName} page of Asana.

I'm providing you with:
1. A screenshot of the actual Asana ${pageName} page
2. HTML structure data (simplified, top 10 levels shown below)
3. CSS styles for key elements

HTML Structure (excerpt):
${JSON.stringify(structure, null, 2).substring(0, 3000)}

CSS Styles (first 20 elements):
${JSON.stringify(styles.slice(0, 20), null, 2)}

TASK: Create a React functional component that recreates this ${pageName} page as accurately as possible.

REQUIREMENTS:
1. Use Tailwind CSS classes for styling
2. Match colors, spacing, typography, and layout from the screenshot
3. Include all major UI elements visible in the screenshot
4. Use semantic HTML (header, nav, main, aside, etc.)
5. Add proper component structure and organization
6. Include comments for major sections
7. Make it responsive (desktop-first, as Asana is primarily desktop)
8. Use placeholder data where needed (tasks, projects, etc.)

IMPORTANT:
- Focus on VISUAL ACCURACY - match the screenshot as closely as possible
- Pay attention to: colors, fonts, spacing, shadows, borders, layouts
- Extract actual color values and sizes from the CSS data provided
- Name the component: ${pageName}Page

Return ONLY the React component code (JSX), nothing else.
`;

    console.log('🚀 Sending request to Gemini AI...');
    console.log('   (This may take 30-60 seconds...)\n');

    try {
        // Send to Gemini with screenshot
        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: screenshot.toString('base64'),
                    mimeType: 'image/png'
                }
            }
        ]);

        const response = result.response;
        const generatedCode = response.text();

        console.log('✅ AI generated the code!\n');

        // Clean up the code (remove markdown code blocks if present)
        let cleanCode = generatedCode;
        if (cleanCode.includes('```')) {
            cleanCode = cleanCode.replace(/```[a-z]*\n/g, '').replace(/```/g, '');
        }

        // Save the component
        const pagesDir = path.join(process.cwd(), 'src', 'pages');
        if (!fs.existsSync(pagesDir)) {
            fs.mkdirSync(pagesDir, { recursive: true });
        }

        const outputPath = path.join(pagesDir, `${pageName}Page.jsx`);
        fs.writeFileSync(outputPath, cleanCode.trim());

        console.log(`💾 Component saved: ${outputPath}`);
        return outputPath;

    } catch (error) {
        console.error(`❌ Error generating ${pageName} page:`, error.message);
        return null;
    }
}

async function generateRouter() {
    console.log('\n' + '='.repeat(60));
    console.log('🔀 Creating Router Configuration...');
    console.log('='.repeat(60));

    const routerCode = `import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`;

    const appPath = path.join(process.cwd(), 'src', 'App.jsx');
    fs.writeFileSync(appPath, routerCode);
    console.log(`✅ Router configured: ${appPath}`);
}

async function generateMultiplePages() {
    console.log('🚀 Starting Multi-Page Generator...\n');

    // Check if analysis folder exists
    const analysisDir = path.join(process.cwd(), 'analysis');
    if (!fs.existsSync(analysisDir)) {
        console.error('❌ Error: analysis/ folder not found. Run "npm run analyze" first!');
        process.exit(1);
    }

    // Initialize Gemini AI
    console.log('🧠 Initializing Gemini AI...');
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        console.error('❌ Error: VITE_GEMINI_API_KEY not found!');
        console.error('   Please add your Gemini API key to .env file.');
        process.exit(1);
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    console.log('✅ Gemini AI initialized\n');

    // Generate components for each page
    const pages = ['Home', 'Projects', 'Tasks'];
    const generatedFiles = [];

    for (const pageName of pages) {
        const filePath = await generatePageComponent(genAI, pageName, analysisDir);
        if (filePath) {
            generatedFiles.push(filePath);
        }

        // Wait a bit between requests to avoid rate limiting
        if (pageName !== 'Tasks') {
            console.log('\n⏳ Waiting 3 seconds before next generation...');
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }

    // Set up router
    await generateRouter();

    // Final summary
    console.log('\n' + '='.repeat(60));
    console.log('✅ GENERATION COMPLETE!');
    console.log('='.repeat(60));
    console.log('\n📦 Generated files:');
    generatedFiles.forEach(file => console.log(`   ✓ ${file}`));
    console.log(`   ✓ ${path.join(process.cwd(), 'src', 'App.jsx')} (router)`);

    console.log('\n📌 Next steps:');
    console.log('   1. Install React Router: npm install react-router-dom');
    console.log('   2. Run the app: npm run dev');
    console.log('   3. Navigate between pages:');
    console.log('      - http://localhost:5173/home');
    console.log('      - http://localhost:5173/projects');
    console.log('      - http://localhost:5173/tasks');
}

// Run the generator
generateMultiplePages().catch(error => {
    console.error('❌ Fatal Error:', error);
    process.exit(1);
});
