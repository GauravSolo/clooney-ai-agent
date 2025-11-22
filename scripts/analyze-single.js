import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

/**
 * SIMPLE SINGLE PAGE ANALYZER
 * 
 * Analyzes a specific Asana page (My Tasks in this case)
 * 
 * Usage: node scripts/analyze-single.js tasks
 */

async function analyzeCurrentPage() {
    console.log('🚀 Starting Single Page Analyzer...\n');

    const pageName = process.argv[2] || 'tasks';
    console.log(`📊 Will save as: ${pageName}\n`);

    // Create analysis folder
    const analysisDir = path.join(process.cwd(), 'analysis');
    const pageDir = path.join(analysisDir, pageName.toLowerCase());

    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
    }

    // Launch browser
    console.log('🌐 Launching browser...');
    const browser = await chromium.launch({
        headless: false,
        slowMo: 100
    });

    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to your My Tasks page
    const url = 'https://app.asana.com/1/1211957160366715/project/1211957160381189/list';
    console.log(`📍 Navigating to: ${url}`);
    console.log('   (You may need to login manually if prompted)\n');

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(8000); // Wait for page to fully load

    // Extract and save
    console.log('📸 Taking screenshot...');
    await page.screenshot({
        path: path.join(pageDir, 'screenshot.png'),
        fullPage: true
    });

    console.log('🔍 Extracting HTML structure...');
    const structure = await page.evaluate(() => {
        function extract(el, depth = 0) {
            if (depth > 8) return null;
            return {
                tag: el.tagName,
                id: el.id || null,
                classes: typeof el.className === 'string' ? el.className : null,
                text: el.innerText ? el.innerText.substring(0, 100) : null,
                attributes: {
                    href: el.getAttribute('href'),
                    role: el.getAttribute('role'),
                    'aria-label': el.getAttribute('aria-label'),
                },
                children: Array.from(el.children).map(c => extract(c, depth + 1)).filter(Boolean)
            };
        }
        return extract(document.body);
    });

    fs.writeFileSync(
        path.join(pageDir, 'structure.json'),
        JSON.stringify(structure, null, 2)
    );

    console.log('🎨 Extracting CSS styles...');
    const styles = await page.evaluate(() => {
        const elements = document.querySelectorAll('body *');
        return Array.from(elements).slice(0, 100).map(el => {
            const cs = window.getComputedStyle(el);
            const classes = typeof el.className === 'string'
                ? el.className.split(' ').filter(c => c).join('.')
                : '';

            return {
                selector: `${el.tagName}${el.id ? '#' + el.id : ''}${classes ? '.' + classes : ''}`,
                styles: {
                    display: cs.display,
                    position: cs.position,
                    color: cs.color,
                    backgroundColor: cs.backgroundColor,
                    fontSize: cs.fontSize,
                    fontFamily: cs.fontFamily,
                    fontWeight: cs.fontWeight,
                    padding: cs.padding,
                    margin: cs.margin,
                    border: cs.border,
                    borderRadius: cs.borderRadius
                }
            };
        });
    });

    fs.writeFileSync(
        path.join(pageDir, 'styles.json'),
        JSON.stringify(styles, null, 2)
    );

    await browser.close();
    console.log(`\n✅ Done! Analysis saved to: analysis/${pageName.toLowerCase()}/`);
    console.log('\n📌 Next step: Run "npm run generate" to regenerate components with the new data!');
}

analyzeCurrentPage().catch(console.error);
