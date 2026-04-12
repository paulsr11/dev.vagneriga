#!/usr/bin/env node
import { chromium } from 'playwright';

const url = 'https://dev2.vagneriga.lv/lv';
const logs = [];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  context.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error' || type === 'warning') {
      logs.push(`[${type}] ${text}`);
    }
  });

  const page = await context.newPage();
  
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    console.log('Status:', response?.status());
    
    // Wait a bit for client-side JS / hydration
    await page.waitForTimeout(3000);
    
    const hasErrorOverlay = await page.locator('text=Application error').count() > 0;
    const hasNextError = await page.locator('#__next').count() > 0;
    const bodyText = await page.locator('body').innerText();
    const hasContent = bodyText.includes('Vagneriga') || bodyText.includes('MŪZIKA') || bodyText.includes('Koncerti');
    
    console.log('Has error overlay:', hasErrorOverlay);
    console.log('Has __next div:', hasNextError);
    console.log('Has content (Vagneriga/MŪZIKA/Koncerti):', hasContent);
    
    await page.screenshot({ path: '/tmp/dev2-check.png' });
    console.log('Screenshot saved to /tmp/dev2-check.png');
  } catch (e) {
    console.error('Error:', e.message);
  }

  if (logs.length) {
    console.log('\nConsole errors/warnings:');
    logs.forEach(l => console.log(' ', l));
  }

  await browser.close();
})();
