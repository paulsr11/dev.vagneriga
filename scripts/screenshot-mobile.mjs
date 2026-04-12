#!/usr/bin/env node
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const browser = await chromium.launch({ 
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
});
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
});
const page = await context.newPage();
await page.goto('https://dev2.vagneriga.lv/lv', { waitUntil: 'networkidle', timeout: 15000 });

// Scroll Patroni into view, then scroll down a bit so fixed header doesn't overlap the card
await page.locator('h2:has-text("Patroni")').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollBy(0, 80));
await page.waitForTimeout(500);
const patroni = await page.locator('[data-patroni-card]').first();
await page.waitForTimeout(800);
const buffer = await patroni.screenshot({ path: null });
writeFileSync('/tmp/patroni-mobile.png', buffer);
await browser.close();
console.log('Saved /tmp/patroni-mobile.png');
