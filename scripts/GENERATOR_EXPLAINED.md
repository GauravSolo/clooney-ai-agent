# Code Generator Script - How It Works 🤖

## What Does This Script Do?

The **generator** script is where the **magic happens**! It takes the data from the analyzer and uses **Gemini AI** to write React code for you.

## Step-by-Step Breakdown

### 1. Read Analysis Files
```javascript
const screenshot = fs.readFileSync(screenshotPath);
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf-8'));
const styles = JSON.parse(fs.readFileSync(stylesPath, 'utf-8'));
```

Reads the 3 files created by the analyzer:
- Screenshot (as binary data)
- HTML structure (as JSON)
- CSS styles (as JSON)

### 2. Initialize Gemini AI
```javascript
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
```

- Uses your API key from `.env.local`
- Selects `gemini-1.5-flash` model (fast and free!)

### 3. Create a Prompt
The prompt tells Gemini **exactly what to do**:
```
You are an expert React developer. Create a component matching this design.
Here's the HTML structure: [JSON data]
Here's the CSS styles: [JSON data]
Use Tailwind CSS. Make it look exactly like the screenshot.
```

### 4. Send Request with Screenshot
```javascript
const result = await model.generateContent([
  prompt,
  { inlineData: { data: screenshot.toString('base64'), mimeType: 'image/png' } }
]);
```

Gemini receives:
- The text prompt
- The screenshot image (base64 encoded)

### 5. Get React Code Back
```javascript
const generatedCode = response.text();
```

Gemini returns a complete React component!

### 6. Save the Component
```javascript
fs.writeFileSync('src/components/GeneratedPage.jsx', cleanCode);
```

Saves the AI-generated code to your project.

## What You Need

**Before running**, create `.env.local`:
```bash
VITE_GEMINI_API_KEY=your_actual_key_here
```

Get your free API key from: https://makersuite.google.com/app/apikey

## How to Use

1. Make sure you've run the analyzer first: `npm run analyze`
2. Add your Gemini API key to `.env.local`
3. Run: `npm run generate`
4. Check `src/components/GeneratedPage.jsx` for the AI-generated code!

## Magic Explained ✨

**The amazing part:** Gemini AI can "see" the screenshot AND read the structure/styles data, then write React code that recreates the design!

Think of it like:
- You show a designer a screenshot
- You give them the HTML and CSS details
- They write React code for you

Except the designer is an AI and it happens in seconds! 🚀
