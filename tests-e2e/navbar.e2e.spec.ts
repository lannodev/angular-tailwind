import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
});

test('check navbar menu appears', async ({ page }) => {
  await page.getByRole('button', { name: 'Base' }).hover();
  const authButton = page.getByRole('button', { name: 'Auth' });
  await expect(authButton).toBeVisible();
  await authButton.hover();
  const menu = page.locator('.dropdown-content ul').nth(2);
  await expect(menu).toBeVisible();
  const itens = menu.locator('li');
  await expect(itens).toHaveCount(5);
});
