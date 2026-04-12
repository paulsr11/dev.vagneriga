import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3002/lv');
  await page.waitForSelector('[data-patroni-card]');
  const desktopCard = await page.locator('[data-patroni-card]').first();
  await desktopCard.scrollIntoViewIfNeeded();
  await desktopCard.screenshot({ path: '/tmp/patroni-desktop.png' });
  console.log('Saved /tmp/patroni-desktop.png');

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3002/lv');
  await page.waitForSelector('[data-patroni-card]');
  const mobileCard = await page.locator('[data-patroni-card]').first();
  await mobileCard.scrollIntoViewIfNeeded();
  await mobileCard.screenshot({ path: '/tmp/patroni-mobile.png' });
  console.log('Saved /tmp/patroni-mobile.png');

  await browser.close();
})();
