import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads
    await expect(page).toHaveTitle(/mira/i);
    
    // Check for main navigation elements
    await expect(page.locator('nav')).toBeVisible();
    
    // Check that hero image loads
    await expect(page.locator('img[alt*="hero"]')).toBeVisible();
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/');
    
    // Click on projects navigation link
    await page.click('a[href="/projects"]');
    
    // Verify we're on the projects page
    await expect(page).toHaveURL('/projects');
    
    // Check that projects content is visible
    await expect(page.locator('text=Projects')).toBeVisible();
  });

  test('should navigate back to home from projects', async ({ page }) => {
    await page.goto('/projects');
    
    // Click home/logo link
    await page.click('a[href="/"]');
    
    // Verify we're back on home page
    await expect(page).toHaveURL('/');
    await expect(page.locator('img[alt*="hero"]')).toBeVisible();
  });

  test('should have working navigation bar on all pages', async ({ page }) => {
    const pages = ['/', '/projects'];
    
    for (const url of pages) {
      await page.goto(url);
      
      // Check that navigation is present and visible
      await expect(page.locator('nav')).toBeVisible();
      
      // Check that navigation links are clickable
      const homeLink = page.locator('a[href="/"]');
      const projectsLink = page.locator('a[href="/projects"]');
      
      await expect(homeLink).toBeVisible();
      await expect(projectsLink).toBeVisible();
    }
  });
});