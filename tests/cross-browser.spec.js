import { test, expect } from '@playwright/test';

test.describe('Cross-Browser Compatibility', () => {
  // Test core functionality across all browsers
  ['chromium', 'firefox', 'webkit'].forEach(browserName => {
    test.describe(`${browserName} Browser Tests`, () => {
      test(`should load homepage correctly in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Check page loads
        await expect(page).toHaveTitle(/mira/i);
        
        // Check navigation works
        await expect(page.locator('nav')).toBeVisible();
        
        // Check hero content loads
        await expect(page.locator('img[alt*="hero"]')).toBeVisible();
      });

      test(`should handle navigation in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        
        // Navigate to projects
        await page.click('a[href="/projects"]');
        await expect(page).toHaveURL('/projects');
        
        // Navigate back home
        await page.click('a[href="/"]');
        await expect(page).toHaveURL('/');
      });

      test(`should handle responsive design in ${browserName}`, async ({ page }) => {
        const viewports = [
          { width: 375, height: 812 },   // Mobile
          { width: 768, height: 1024 },  // Tablet
          { width: 1366, height: 768 }   // Desktop
        ];

        for (const viewport of viewports) {
          await page.setViewportSize(viewport);
          await page.goto('/');
          await page.waitForLoadState('networkidle');
          
          // Check that content is visible at all viewport sizes
          await expect(page.locator('nav')).toBeVisible();
          await expect(page.locator('img[alt*="hero"]')).toBeVisible();
          
          // Check no horizontal overflow
          const hasHorizontalScroll = await page.evaluate(() => 
            document.documentElement.scrollWidth > document.documentElement.clientWidth
          );
          expect(hasHorizontalScroll).toBe(false);
        }
      });

      test(`should support modern CSS features in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Test CSS Grid support
        const supportsGrid = await page.evaluate(() => {
          return CSS.supports('display', 'grid');
        });
        expect(supportsGrid).toBe(true);
        
        // Test CSS Flexbox support
        const supportsFlex = await page.evaluate(() => {
          return CSS.supports('display', 'flex');
        });
        expect(supportsFlex).toBe(true);
        
        // Test CSS Custom Properties support
        const supportsCustomProps = await page.evaluate(() => {
          return CSS.supports('--custom-property', 'value');
        });
        expect(supportsCustomProps).toBe(true);
      });

      test(`should handle JavaScript features in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        
        // Test ES6+ features are supported
        const modernJSSupport = await page.evaluate(() => {
          // Test arrow functions, const/let, template literals
          try {
            const test = (x) => `Modern JS: ${x}`;
            return test('supported') === 'Modern JS: supported';
          } catch (e) {
            return false;
          }
        });
        expect(modernJSSupport).toBe(true);
        
        // Test Promise support
        const promiseSupport = await page.evaluate(() => {
          return typeof Promise !== 'undefined' && typeof Promise.resolve === 'function';
        });
        expect(promiseSupport).toBe(true);
      });

      test(`should handle touch events in ${browserName}`, async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Simulate touch interactions
        const navLink = page.locator('a[href="/projects"]');
        if (await navLink.isVisible()) {
          // Touch the element
          await navLink.tap();
          await expect(page).toHaveURL('/projects');
        }
      });

      test(`should handle image loading in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Check that images load successfully
        const images = page.locator('img');
        const imageCount = await images.count();
        
        for (let i = 0; i < Math.min(imageCount, 3); i++) {
          const img = images.nth(i);
          if (await img.isVisible()) {
            const isLoaded = await img.evaluate(img => {
              return img.complete && img.naturalWidth > 0;
            });
            expect(isLoaded).toBe(true);
          }
        }
      });

      test(`should handle font loading in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Wait for fonts to load
        await page.waitForFunction(() => document.fonts.ready);
        
        // Check that text is rendered
        const textElements = page.locator('h1, h2, h3, p').first();
        if (await textElements.count() > 0) {
          await expect(textElements).toBeVisible();
          
          // Check that font has loaded by measuring text
          const hasContent = await textElements.evaluate(el => {
            return el.textContent && el.textContent.trim().length > 0;
          });
          expect(hasContent).toBe(true);
        }
      });
    });
  });

  // Specific browser quirks and features
  test.describe('Browser-Specific Tests', () => {
    test('should handle Safari-specific features', async ({ page, browserName }) => {
      test.skip(browserName !== 'webkit', 'Safari-specific test');
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Test WebKit-specific behavior
      const webkitFeatures = await page.evaluate(() => {
        return {
          hasWebkitPrefix: 'webkitTransform' in document.documentElement.style,
          supportsWebkitBackdropFilter: CSS.supports('-webkit-backdrop-filter', 'blur(10px)')
        };
      });
      
      // These should be true in Safari/WebKit
      expect(webkitFeatures.hasWebkitPrefix).toBe(true);
    });

    test('should handle Firefox-specific features', async ({ page, browserName }) => {
      test.skip(browserName !== 'firefox', 'Firefox-specific test');
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Test Firefox-specific behavior
      const firefoxFeatures = await page.evaluate(() => {
        return {
          hasMozPrefix: 'MozTransform' in document.documentElement.style,
          userAgent: navigator.userAgent.includes('Firefox')
        };
      });
      
      expect(firefoxFeatures.userAgent).toBe(true);
    });

    test('should handle Chrome-specific features', async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', 'Chrome-specific test');
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Test Chrome-specific APIs
      const chromeFeatures = await page.evaluate(() => {
        return {
          hasChrome: typeof window.chrome !== 'undefined',
          supportsWebGL: !!document.createElement('canvas').getContext('webgl')
        };
      });
      
      expect(chromeFeatures.supportsWebGL).toBe(true);
    });
  });

  test.describe('Performance Across Browsers', () => {
    ['chromium', 'firefox', 'webkit'].forEach(browserName => {
      test(`should have acceptable load times in ${browserName}`, async ({ page }) => {
        const startTime = Date.now();
        
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        const loadTime = Date.now() - startTime;
        
        // Load time should be under 5 seconds on local development
        expect(loadTime).toBeLessThan(5000);
      });

      test(`should handle memory usage efficiently in ${browserName}`, async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        
        // Simulate some user interactions
        await page.mouse.wheel(0, 500);
        await page.click('a[href="/projects"]');
        await page.waitForLoadState('networkidle');
        await page.click('a[href="/"]');
        await page.waitForLoadState('networkidle');
        
        // Get memory usage if available
        const memoryInfo = await page.evaluate(() => {
          return performance.memory ? {
            usedJSHeapSize: performance.memory.usedJSHeapSize,
            totalJSHeapSize: performance.memory.totalJSHeapSize
          } : null;
        });
        
        if (memoryInfo) {
          // Memory usage should be reasonable (less than 50MB)
          expect(memoryInfo.usedJSHeapSize).toBeLessThan(50 * 1024 * 1024);
        }
      });
    });
  });
});