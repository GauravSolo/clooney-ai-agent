import { test, expect } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';

/**
 * VISUAL COMPARISON TEST
 * 
 * Compares your clone against original Asana screenshots
 * (Uses screenshots already captured during analysis phase)
 * 
 * Usage: npm run test:visual
 */

const PAGES = [
    { name: 'Home', analysisFolder: 'home', cloneUrl: 'http://localhost:5173/home' },
    { name: 'Projects', analysisFolder: 'projects', cloneUrl: 'http://localhost:5173/projects' },
    { name: 'Tasks', analysisFolder: 'tasks', cloneUrl: 'http://localhost:5173/tasks' }
];

const results = {
    pages: {},
    overallAccuracy: 0
};

test.describe('Asana Clone Visual Comparison', () => {

    test.beforeAll(async () => {
        const resultsDir = path.join(process.cwd(), 'test-results');
        if (!fs.existsSync(resultsDir)) {
            fs.mkdirSync(resultsDir);
        }
    });

    for (const pageInfo of PAGES) {
        test(`Compare ${pageInfo.name} Page`, async ({ page }) => {
            console.log(`\n${'='.repeat(60)}`);
            console.log(`🔍 Testing ${pageInfo.name} Page`);
            console.log('='.repeat(60));

            // Get original screenshot from analysis folder
            const originalScreenshotPath = path.join(process.cwd(), 'analysis', pageInfo.analysisFolder, 'screenshot.png');

            if (!fs.existsSync(originalScreenshotPath)) {
                console.error(`❌ Original screenshot not found: ${originalScreenshotPath}`);
                console.error('   Run "npm run analyze" first!');
                test.skip();
                return;
            }

            console.log('✅ Using original screenshot from analysis folder');

            // Copy to test-results for the report
            const originalResultPath = path.join(process.cwd(), 'test-results', `${pageInfo.name.toLowerCase()}-original.png`);
            fs.copyFileSync(originalScreenshotPath, originalResultPath);

            // Screenshot your clone
            console.log('📸 Capturing your clone...');
            await page.setViewportSize({ width: 1920, height: 1080 });
            await page.goto(pageInfo.cloneUrl, { waitUntil: 'networkidle' });
            await page.waitForTimeout(2000);

            const cloneScreenshotPath = path.join(process.cwd(), 'test-results', `${pageInfo.name.toLowerCase()}-clone.png`);
            await page.screenshot({ path: cloneScreenshotPath, fullPage: false });

            // Compare images
            console.log('🔬 Comparing images...');
            const originalBuffer = fs.readFileSync(originalScreenshotPath);
            const cloneBuffer = fs.readFileSync(cloneScreenshotPath);

            const img1 = PNG.sync.read(originalBuffer);
            const img2 = PNG.sync.read(cloneBuffer);

            // Ensure both images are the same size
            const width = Math.min(img1.width, img2.width);
            const height = Math.min(img1.height, img2.height);

            const diff = new PNG({ width, height });

            const numDiffPixels = pixelmatch(
                img1.data,
                img2.data,
                diff.data,
                width,
                height,
                { threshold: 0.1 }
            );

            // Save diff image
            const diffPath = path.join(process.cwd(), 'test-results', `${pageInfo.name.toLowerCase()}-diff.png`);
            fs.writeFileSync(diffPath, PNG.sync.write(diff));

            // Calculate accuracy
            const totalPixels = width * height;
            const matchedPixels = totalPixels - numDiffPixels;
            const accuracy = ((matchedPixels / totalPixels) * 100).toFixed(2);

            // Store results
            results.pages[pageInfo.name] = {
                accuracy: parseFloat(accuracy),
                totalPixels,
                matchedPixels,
                diffPixels: numDiffPixels
            };

            console.log(`\n📊 Results for ${pageInfo.name}:`);
            console.log(`   Total Pixels: ${totalPixels.toLocaleString()}`);
            console.log(`   Matched Pixels: ${matchedPixels.toLocaleString()}`);
            console.log(`   Different Pixels: ${numDiffPixels.toLocaleString()}`);
            console.log(`   ✅ Accuracy: ${accuracy}%`);

            // Expect at least 40% accuracy
            expect(parseFloat(accuracy)).toBeGreaterThan(40);
        });
    }

    test.afterAll(async () => {
        // Calculate overall accuracy
        const accuracies = Object.values(results.pages).map(p => p.accuracy);
        if (accuracies.length > 0) {
            results.overallAccuracy = (accuracies.reduce((a, b) => a + b, 0) / accuracies.length).toFixed(2);
        }

        // Generate HTML report
        const reportPath = path.join(process.cwd(), 'test-results', 'comparison-report.html');
        const htmlReport = generateHTMLReport(results);
        fs.writeFileSync(reportPath, htmlReport);

        console.log(`\n${'='.repeat(60)}`);
        console.log('📊 FINAL RESULTS');
        console.log('='.repeat(60));
        console.log(`Overall Accuracy: ${results.overallAccuracy}%\n`);
        Object.entries(results.pages).forEach(([page, data]) => {
            console.log(`  ${page}: ${data.accuracy}%`);
        });
        console.log(`\n📄 HTML Report: ${reportPath}`);
        console.log('📁 Open this file in your browser to see the full report!');
        console.log('='.repeat(60));
    });
});

function generateHTMLReport(results) {
    const overallAccuracy = parseFloat(results.overallAccuracy) || 0;

    return `
<!DOCTYPE html>
<html>
<head>
  <title>Asana Clone - Visual Comparison Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
    .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h1 { color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px; }
    .summary { background: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .overall { font-size: 48px; font-weight: bold; color: ${overallAccuracy > 70 ? '#4CAF50' : overallAccuracy > 50 ? '#FF9800' : '#F44336'}; text-align: center; margin: 20px 0; }
    .page-section { margin: 30px 0; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #fafafa; }
    .page-title { font-size: 24px; font-weight: bold; margin-bottom: 15px; color: #333; }
    .accuracy { font-size: 36px; font-weight: bold; margin: 10px 0; }
    .images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; }
    .image-box { text-align: center; background: white; padding: 10px; border-radius: 4px; }
    .image-box img { width: 100%; border: 1px solid #ddd; border-radius: 4px; }
    .image-box p { margin: 10px 0 0 0; font-weight: bold; font-size: 14px; }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 15px 0; }
    .stat { background: white; padding: 15px; border-radius: 4px; text-align: center; border: 1px solid #e0e0e0; }
    .stat-label { font-size: 12px; color: #666; margin-bottom: 5px; }
    .stat-value { font-size: 24px; font-weight: bold; color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎨 Asana Clone - Visual Comparison Report</h1>
    
    <div class="summary">
      <h2 style="margin-top: 0;">Overall Accuracy</h2>
      <div class="overall">${results.overallAccuracy}%</div>
      <p style="text-align: center; color: #666; margin-bottom: 0;">
        ${overallAccuracy > 70 ? '✅ Good match!' : overallAccuracy > 50 ? '⚠️ Moderate match - room for improvement' : '❌ Significant differences - consider regenerating'}
      </p>
    </div>

    ${Object.entries(results.pages).map(([pageName, data]) => {
        const pageAccuracy = data.accuracy || 0;
        const color = pageAccuracy > 70 ? '#4CAF50' : pageAccuracy > 50 ? '#FF9800' : '#F44336';
        return `
      <div class="page-section">
        <div class="page-title">${pageName} Page</div>
        <div class="accuracy" style="color: ${color};">${data.accuracy}%</div>
        
        <div class="stats">
          <div class="stat">
            <div class="stat-label">Total Pixels</div>
            <div class="stat-value">${data.totalPixels.toLocaleString()}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Matched</div>
            <div class="stat-value" style="color: #4CAF50;">${data.matchedPixels.toLocaleString()}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Different</div>
            <div class="stat-value" style="color: #F44336;">${data.diffPixels.toLocaleString()}</div>
          </div>
        </div>

        <div class="images">
          <div class="image-box">
            <img src="${pageName.toLowerCase()}-original.png" alt="Original">
            <p>Original Asana</p>
          </div>
          <div class="image-box">
            <img src="${pageName.toLowerCase()}-clone.png" alt="Clone">
            <p>Your Clone</p>
          </div>
          <div class="image-box">
            <img src="${pageName.toLowerCase()}-diff.png" alt="Difference">
            <p>Differences</p>
          </div>
        </div>
      </div>
    `;
    }).join('')}

    <div style="margin-top: 40px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
      <h3 style="margin-top: 0;">📝 Notes</h3>
      <ul style="margin-bottom: 0;">
        <li>Higher accuracy percentage = better visual match</li>
        <li>Differences are highlighted in pink in the diff images</li>
        <li>Dynamic content (usernames, dates, tasks) will cause differences - that's normal!</li>
        <li>Focus on layout, colors, typography, and component structure</li>
        <li>To improve accuracy, run <code>npm run generate</code> again</li>
      </ul>
    </div>
  </div>
</body>
</html>
  `;
}
