# Clooney - Analyzer Script Explanation

## What is analyze.js?

This script **automatically opens a website and captures its design**.

## How It Works (Line by Line)

### 1. Import Libraries
```javascript
import { chromium } from '@playwright/test';
```
- Imports Playwright (a tool that controls a browser automatically)

### 2. Create Folder
```javascript
if (!fs.existsSync(analysisDir)) {
  fs.mkdirSync(analysisDir);
}
```
- Creates an `analysis/` folder to save screenshots and data

### 3. Launch Browser
```javascript
const browser = await chromium.launch({ headless: false });
```
- Opens a Chrome browser
- `headless: false` means you can SEE the browser (set to `true` to hide it)

### 4. Navigate to Website
```javascript
await page.goto(targetUrl);
```
- Opens the website you want to analyze

### 5. Take Screenshot
```javascript
await page.screenshot({ path: screenshotPath, fullPage: true });
```
- Takes a screenshot of the entire page
- Saves it as `analysis/screenshot.png`

### 6. Close Browser
```javascript
await browser.close();
```
- Closes the browser when done

## What You'll Get

After running `npm run analyze`, you'll see:
```
analysis/
└── screenshot.png   (full screenshot of the website)
```

## Next Steps

In the next version, we'll add:
- Extracting HTML structure
- Extracting CSS styles
- Saving more detailed data
