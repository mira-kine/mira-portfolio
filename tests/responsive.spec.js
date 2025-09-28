import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  const breakpoints = [
    { name: 'Mobile Portrait', width: 375, height: 812 },
    { name: 'Mobile Landscape', width: 812, height: 375 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 },
    { name: 'Desktop Small', width: 1366, height: 768 },
    { name: 'Desktop Large', width: 1920, height: 1080 },
    { name: 'Ultra Wide', width: 2560, height: 1440 }
  ];

  for (const breakpoint of breakpoints) {
    test(`should display correctly on ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`, async ({ page }) => {
      await page.setViewportSize({ width: breakpoint.width, height: breakpoint.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Test navigation visibility and functionality
      const nav = page.locator('nav');
      await expect(nav).toBeVisible();

      // Test hero image responsiveness
      const heroImage = page.locator('img[alt*="hero"]');
      await expect(heroImage).toBeVisible();
      
      // Check that image doesn't overflow
      const heroBox = await heroImage.boundingBox();
      if (heroBox) {
        expect(heroBox.width).toBeLessThanOrEqual(breakpoint.width);
      }

      // Test that text is readable (not too small)
      const textElements = page.locator('h1, h2, h3, p');
      const firstTextElement = textElements.first();
      if (await firstTextElement.count() > 0) {
        const fontSize = await firstTextElement.evaluate(el => 
          window.getComputedStyle(el).fontSize
        );
        const fontSizeValue = parseInt(fontSize);
        expect(fontSizeValue).toBeGreaterThanOrEqual(14); // Minimum readable size
      }

      // Test that content doesn't have horizontal scroll
      const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyScrollWidth).toBeLessThanOrEqual(breakpoint.width + 20); // Allow small buffer
    });
  }

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check navigation links have adequate touch targets (44px minimum)
    const navLinks = page.locator('nav a');
    const linkCount = await navLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = navLinks.nth(i);
      if (await link.isVisible()) {
        const box = await link.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });

  test('should handle orientation changes', async ({ page }) => {
    // Start in portrait
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Verify content is visible in portrait
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('img[alt*="hero"]')).toBeVisible();

    // Switch to landscape
    await page.setViewportSize({ width: 812, height: 375 });
    await page.waitForTimeout(500); // Allow for reflow

    // Verify content is still visible and accessible in landscape
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('img[alt*="hero"]')).toBeVisible();
  });

  test('should load appropriate images for different screen densities', async ({ page }) => {
    const densities = [1, 2, 3]; // 1x, 2x, 3x pixel densities
    
    for (const density of densities) {
      await page.emulateMedia({ colorScheme: 'light' });
      await page.setViewportSize({ width: 375, height: 812 });
      
      // Emulate different pixel densities
      await page.addInitScript(`
        Object.defineProperty(window, 'devicePixelRatio', {
          get: () => ${density}
        });
      `);
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Check that images load successfully
      const images = page.locator('img');
      const imageCount = await images.count();
      
      for (let i = 0; i < Math.min(imageCount, 3); i++) { // Test first 3 images
        const img = images.nth(i);
        if (await img.isVisible()) {
          // Check that image has loaded (naturalWidth > 0)
          const isLoaded = await img.evaluate(img => img.naturalWidth > 0);
          expect(isLoaded).toBe(true);
        }
      }
    }
  });

  test('should maintain layout integrity when zoomed', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test different zoom levels
    const zoomLevels = [0.5, 0.75, 1.25, 1.5, 2.0];
    
    for (const zoom of zoomLevels) {
      await page.emulateMedia({ colorScheme: 'light' });
      await page.addInitScript(`
        document.body.style.zoom = '${zoom}';
      `);
      
      await page.reload();
      await page.waitForLoadState('networkidle');
      
      // Check that navigation is still visible and functional
      await expect(page.locator('nav')).toBeVisible();
      
      // Check that main content is visible
      const mainContent = page.locator('main, section, .container').first();
      await expect(mainContent).toBeVisible();
      
      // Verify no horizontal scrollbar at reasonable zoom levels
      if (zoom <= 1.5) {
        const hasHorizontalScroll = await page.evaluate(() => 
          document.documentElement.scrollWidth > document.documentElement.clientWidth
        );
        expect(hasHorizontalScroll).toBe(false);
      }
    }
  });
});