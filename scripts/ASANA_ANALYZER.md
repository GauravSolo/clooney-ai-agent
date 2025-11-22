# Asana Analyzer - How It Works 🔐

## What's New?

This enhanced analyzer can:
1. **Login to Asana automatically** 
2. **Analyze 3 pages**: Home, Projects, Tasks
3. **Save each page separately** with its own folder

## Key Features

### 1. Automatic Login
```javascript
async function loginToAsana(page) {
  // Step 1: Enter email
  await emailInput.fill(process.env.ASANA_EMAIL);
  await emailInput.press('Enter');
  
  // Step 2: Enter password (after email is submitted)
  await passwordInput.fill(process.env.ASANA_PASSWORD);
  await passwordInput.press('Enter');
}
```

Follows Asana's 2-step login:
- Email → press Enter
- Password → press Enter

### 2. Multi-Page Analysis
```javascript
await analyzePage(page, 'Home', analysisDir);      // Home page
await analyzePage(page, 'Projects', analysisDir);  // Projects page
await analyzePage(page, 'Tasks', analysisDir);     // Tasks page
```

Each page gets its own folder with screenshot + data.

### 3. Improved Selectors
Added more attributes to capture Asana's structure:
- `role` (for accessibility)
- `aria-label` (for buttons/links)
- More elements (increased from 50 to 100)

## Folder Structure

After running, you'll get:
```
analysis/
├── home/
│   ├── screenshot.png
│   ├── structure.json
│   └── styles.json
├── projects/
│   ├── screenshot.png
│   ├── structure.json
│   └── styles.json
└── tasks/
    ├── screenshot.png
    ├── structure.json
    └── styles.json
```

## Setup Required

Add to your `.env.local`:
```
ASANA_EMAIL=your_email@example.com
ASANA_PASSWORD=your_password
```

## Run It

```bash
npm run analyze
```

The browser will:
1. Open Asana
2. Login automatically
3. Analyze Home page
4. Navigate to Projects and analyze
5. Navigate to Tasks and analyze
6. Close

All done automatically! 🎉
