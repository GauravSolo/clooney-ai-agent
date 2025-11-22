import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function loginToAsana(page) {
    console.log('🔐 Logging into Asana...');
    await page.goto('https://app.asana.com/', { waitUntil: 'domcontentloaded' });
    console.log('   ⏳ Waiting for page to load...');
    await page.waitForTimeout(3000);

    console.log('   📧 Looking for email input...');
    try {
        await page.waitForSelector('input[type="email"]', { state: 'visible', timeout: 15000 });
        console.log('   ✓ Found email input!');
        await page.click('input[type="email"]');
        await page.waitForTimeout(500);
        console.log('   ⌨️  Typing email...');
        await page.type('input[type="email"]', process.env.ASANA_EMAIL);
        await page.waitForTimeout(1000);
        console.log('   ✓ Email entered, pressing Enter...');
        await page.keyboard.press('Enter');
    } catch (error) {
        console.error('   ❌ Could not find or fill email input!');
        await page.screenshot({ path: 'debug-email-error.png' });
        throw error;
    }

    console.log('   ⏳ Waiting for password field...');
    await page.waitForTimeout(3000);

    console.log('   🔑 Looking for password input...');
    try {
        await page.waitForSelector('input[type="password"]', { state: 'visible', timeout: 15000 });
        console.log('   ✓ Found password input!');
        await page.click('input[type="password"]');
        await page.waitForTimeout(500);
        console.log('   ⌨️  Typing password...');
        await page.type('input[type="password"]', process.env.ASANA_PASSWORD);
        await page.waitForTimeout(1000);
        console.log('   ✓ Password entered, pressing Enter...');
        await page.keyboard.press('Enter');
    } catch (error) {
        console.error('   ❌ Could not find or fill password input!');
        await page.screenshot({ path: 'debug-password-error.png' });
        throw error;
    }

    console.log('   ⏳ Waiting for login to complete...');
    await page.waitForTimeout(6000);
    console.log('✅ Login successful!\n');
}

async function analyzePage(page, pageName, analysisDir) {
    console.log(`📊 Analyzing ${pageName} page...`);
    await page.waitForTimeout(3000);

    const pageDir = path.join(analysisDir, pageName.toLowerCase());
    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
    }

    console.log(`   🔍 Extracting HTML structure...`);
    const htmlStructure = await page.evaluate(() => {
        function extractElement(element, depth = 0) {
            if (depth > 8) return null;
            return {
                tag: element.tagName,
                id: element.id || null,
                classes: typeof element.className === 'string' ? element.className : null,
                text: element.innerText ? element.innerText.substring(0, 100) : null,
                attributes: {
                    href: element.getAttribute('href'),
                    src: element.getAttribute('src'),
                    role: element.getAttribute('role'),
                    'aria-label': element.getAttribute('aria-label'),
                },
                children: Array.from(element.children).map(child => extractElement(child, depth + 1)).filter(Boolean)
            };
        }
        return extractElement(document.body);
    });
    fs.writeFileSync(path.join(pageDir, 'structure.json'), JSON.stringify(htmlStructure, null, 2));

    console.log(`   🎨 Extracting CSS styles...`);
    const cssStyles = await page.evaluate(() => {
        const elements = document.querySelectorAll('body *');
        const styles = [];
        const maxElements = Math.min(elements.length, 100);
        for (let i = 0; i < maxElements; i++) {
            const el = elements[i];
            const computedStyle = window.getComputedStyle(el);
            const classes = typeof el.className === 'string' ? el.className.split(' ').filter(c => c).join('.') : '';
            styles.push({
                selector: `${el.tagName}${el.id ? '#' + el.id : ''}${classes ? '.' + classes : ''}`,
                styles: {
                    display: computedStyle.display,
                    position: computedStyle.position,
                    color: computedStyle.color,
                    backgroundColor: computedStyle.backgroundColor,
                    fontSize: computedStyle.fontSize,
                    fontFamily: computedStyle.fontFamily,
                    padding: computedStyle.padding,
                    margin: computedStyle.margin
                }
            });
        }
        return styles;
    });
    fs.writeFileSync(path.join(pageDir, 'styles.json'), JSON.stringify(cssStyles, null, 2));

    console.log(`   📸 Taking screenshot...`);
    await page.screenshot({ path: path.join(pageDir, 'screenshot.png'), fullPage: true });
    console.log(`✅ ${pageName} page analysis complete!\n`);
}

async function analyzeAsana() {
    console.log('🚀 Starting Asana Analyzer...\n');

    if (!process.env.ASANA_EMAIL || !process.env.ASANA_PASSWORD) {
        console.error('❌ Error: ASANA_EMAIL and ASANA_PASSWORD not found!');
        process.exit(1);
    }

    const analysisDir = path.join(process.cwd(), 'analysis');
    if (!fs.existsSync(analysisDir)) fs.mkdirSync(analysisDir);

    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    try {
        await loginToAsana(page);

        // Analyze Home
        await analyzePage(page, 'Home', analysisDir);

        // Navigate to Projects
        console.log('🔄 Navigating to Projects...');
        await page.goto('https://app.asana.com/0/home', { waitUntil: 'domcontentloaded' });
        await page.click('a:has-text("Projects")').catch(() => null);
        await page.waitForTimeout(3000);
        await analyzePage(page, 'Projects', analysisDir);

        // Navigate to My Tasks - YOUR URL HERE
        console.log('🔄 Navigating to My Tasks...');
        await page.goto('https://app.asana.com/1/1211957160366715/project/1211957160381189/list', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(5000);
        await analyzePage(page, 'Tasks', analysisDir);

        console.log('✅ Analysis complete!\n📦 Generated folders: analysis/home/, analysis/projects/, analysis/tasks/');
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        await page.screenshot({ path: 'error-screenshot.png' });
    } finally {
        await browser.close();
    }
}

analyzeAsana().catch(error => {
    console.error('❌ Fatal Error:', error);
    process.exit(1);
});
