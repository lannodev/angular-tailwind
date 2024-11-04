import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/components/table', { waitUntil: 'networkidle' });
});

async function checkTableRowCount(page: Page, filterSelector: string, value: string, expectedRowCount: number) {
  await page.locator(filterSelector).selectOption(value);
  await expect(page.locator('table tbody tr')).toHaveCount(expectedRowCount, { timeout: 5000 });
}

async function checkCellInRow(page: Page, cellContent: string, expectedRowIndex: number) {
  const rows = page.locator('table tbody tr');
  const cellTexts = await rows.nth(expectedRowIndex).locator('td').allTextContents();
  expect(cellTexts).toContain(cellContent);
}

test('check user filter updates table', async ({ page }) => {
  await page.fill('input[name="search"]', 'john');
  await expect(page.locator('table tbody tr')).toHaveCount(2);
});

test('check user filter empty restores table', async ({ page }) => {
  await page.fill('input[name="search"]', '');
  await expect(page.locator('table tbody tr')).toHaveCount(8);
});

test('check user status filter updates table', async ({ page }) => {
  const statusFilters = [
    { value: '', expectedRowCount: 8 }, // All
    { value: '1', expectedRowCount: 5 }, // Active
    { value: '2', expectedRowCount: 2 }, // Disabled
    { value: '3', expectedRowCount: 1 }, // Pending
  ];

  for (const filter of statusFilters) {
    await checkTableRowCount(page, 'select[name="status"]', filter.value, filter.expectedRowCount);
  }
});

test('check user order filter - newest first', async ({ page }) => {
  await page.locator('select[name="order"]').selectOption('1');
  await checkCellInRow(page, 'emmawilson', 0);
});

test('check user order filter - oldest first', async ({ page }) => {
  await page.locator('select[name="order"]').selectOption('2');
  await checkCellInRow(page, 'johndoe', 0);
});
