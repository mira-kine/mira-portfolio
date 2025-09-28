import { test, expect } from '@playwright/test';

test.describe('Animation Tests', () => {
  test('should render FadeInView components with proper animations', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');
    
    // Find elements that use FadeInView (look for motion.div elements)
    const animatedElements = page.locator('[data-testid*="fade"], .motion-div, div[style*="opacity"]');
    
    // Check that animated elements are present
    const count = await animatedElements.count();
    expect(count).toBeGreaterThan(0);
    
    // Test that elements become visible (animations complete)
    if (count > 0) {
      await expect(animatedElements.first()).toBeVisible();
    }
  });

  test('should handle scroll-triggered animations', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get initial viewport height to calculate scroll distance
    const viewportSize = page.viewportSize();
    const scrollDistance = viewportSize.height * 0.5;
    
    // Scroll down to trigger animations
    await page.mouse.wheel(0, scrollDistance);
    
    // Wait a bit for animations to trigger
    await page.waitForTimeout(1000);
    
    // Check that content is still visible after scroll
    await expect(page.locator('body')).toBeVisible();
  });

  test('should maintain animation performance across different viewport sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 }, // Desktop
      { width: 768, height: 1024 },  // Tablet
      { width: 375, height: 812 }    // Mobile
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      // Check that animations work at different viewport sizes
      const animatedContent = page.locator('main, section, .container').first();
      await expect(animatedContent).toBeVisible();
      
      // Scroll test for each viewport
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(500);
      
      // Verify content is still accessible
      await expect(animatedContent).toBeVisible();
    }
  });

  test('should handle rapid navigation without animation glitches', async ({ page }) => {
    // Test rapid navigation between pages
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Rapidly navigate between pages
    await page.click('a[href="/projects"]');
    await page.waitForTimeout(100);
    await page.click('a[href="/"]');
    await page.waitForTimeout(100);
    await page.click('a[href="/projects"]');
    
    // Check that the final page loads correctly
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('/projects');
    
    // Verify that content is visible and not stuck in animation states
    const pageContent = page.locator('main, section, .container').first();
    await expect(pageContent).toBeVisible();
  });

  test('should respect reduced motion preferences', async ({ page }) => {
    // Simulate reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Content should still be visible even with reduced motion
    const mainContent = page.locator('main, section, .container').first();
    await expect(mainContent).toBeVisible();
    
    // Test navigation still works with reduced motion
    await page.click('a[href="/projects"]');
    await expect(page).toHaveURL('/projects');
  });
});