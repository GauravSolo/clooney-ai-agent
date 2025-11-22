# Visual Comparison Test 📊

## What It Does

Automatically compares your Asana clone against the real Asana and generates an accuracy report!

### Features:
- **Screenshot Comparison** - Takes screenshots of both apps
- **Pixel-by-Pixel Analysis** - Compares every pixel
- **Visual Diff Images** - Highlights differences in pink
- **Accuracy Percentage** - Shows how close your clone is
- **HTML Report** - Beautiful report with side-by-side comparisons

## How to Run

### 1. Start Your Clone
```bash
npm run dev
```
Keep it running at http://localhost:5173

### 2. Run the Test
```bash
npm run test:visual
```

**Note:** You may need to login to Asana manually in the test browser when it opens.

### 3. View Results

The test will generate:
```
test-results/
├── home-original.png      # Original Asana
├── home-clone.png         # Your clone
├── home-diff.png          # Visual differences
├── projects-original.png
├── projects-clone.png
├── projects-diff.png
├── tasks-original.png
├── tasks-clone.png
├── tasks-diff.png
└── comparison-report.html # 📄 OPEN THIS!
```

**Open `test-results/comparison-report.html` in your browser** to see the full report!

## What You'll See

The report shows:
- **Overall Accuracy** (average of all pages)
- **Per-Page Accuracy** (Home, Projects, Tasks)
- **Side-by-side Screenshots**
- **Diff Images** (differences highlighted in pink)
- **Pixel Statistics**

## Accuracy Scale

- **80-100%** ✅ Excellent match!
- **60-80%** ⚠️ Good, but could be improved
- **Below 60%** ❌ Significant differences

## Tips

- Dynamic content (dates, usernames) will show as differences - that's normal!
- Focus on layout, colors, and component structure
- The diff image highlights what's different
- You can re-run `npm run generate` to improve accuracy

Enjoy! 🎉
