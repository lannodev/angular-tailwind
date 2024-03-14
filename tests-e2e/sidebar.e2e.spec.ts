import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

test('check sidebar menu link', async ({ page }) => {
  await page.getByRole('navigation').locator('div').filter({ hasText: 'Auth' }).nth(3).click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await expect(page.locator('h2')).toContainText('Sign Up !');
});

test('check toggle sidebar', async ({ page }) => {
  const sidebar = page.locator('app-sidebar');
  await page.getByRole('navigation').getByRole('button').first().click();
  await page.waitForTimeout(500);
  const collapsedSidebarSizes = await sidebar.boundingBox();
  expect(collapsedSidebarSizes?.width).toBe(70);
  await page.getByRole('navigation').getByRole('button').click();
  await page.waitForTimeout(500);
  const normalSidebarSizes = await sidebar.boundingBox();
  expect(normalSidebarSizes?.width).toBe(256);
});
