import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Disable animations for consistent screenshots
    await page.addInitScript(() => {
      document.documentElement.style.setProperty('--animation-duration', '0s');
      document.documentElement.style.setProperty('--transition-duration', '0s');
    });
  });

  test('should match homepage screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Wait for any remaining async operations
    await page.waitForTimeout(1000);
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('should match projects page screenshot', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('projects-page-full.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('should match navigation component across pages', async ({ page }) => {
    const pages = ['/', '/projects'];
    
    for (const url of pages) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
      
      const nav = page.locator('nav');
      await expect(nav).toHaveScreenshot(`navigation-${url.replace('/', 'home') || 'home'}.png`, {
        animations: 'disabled'
      });
    }
  });

  test('should match hero section on homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Target the hero section specifically
    const heroSection = page.locator('div[name="about-me"], .hero, section').first();
    await expect(heroSection).toHaveScreenshot('hero-section.png', {
      animations: 'disabled'
    });
  });

  test('should match mobile layout screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    
    // Homepage mobile
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      animations: 'disabled'
    });
    
    // Projects mobile
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('projects-mobile.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('should match tablet layout screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    
    // Homepage tablet
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('should detect layout shifts', async ({ page }) => {
    await page.goto('/');
    
    // Measure Cumulative Layout Shift (CLS)
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0;
        
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });
        
        // Wait 3 seconds then resolve
        setTimeout(() => resolve(clsValue), 3000);
      });
    });
    
    // CLS should be less than 0.1 for good user experience
    expect(cls).toBeLessThan(0.1);
  });

  test('should maintain visual consistency during hover states', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find interactive elements
    const interactiveElements = page.locator('a, button');
    const count = await interactiveElements.count();
    
    if (count > 0) {
      const firstElement = interactiveElements.first();
      
      // Screenshot before hover
      await expect(firstElement).toHaveScreenshot('element-before-hover.png', {
        animations: 'disabled'
      });
      
      // Hover and screenshot
      await firstElement.hover();
      await page.waitForTimeout(100);
      
      await expect(firstElement).toHaveScreenshot('element-after-hover.png', {
        animations: 'disabled'
      });
    }
  });

  test('should handle dark/light mode consistency', async ({ page }) => {
    // Test light mode (default)
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('homepage-light-mode.png', {
      fullPage: true,
      animations: 'disabled'
    });
    
    // Test dark mode if supported
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('homepage-dark-mode.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
});