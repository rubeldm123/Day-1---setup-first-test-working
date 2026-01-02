import { test, expect } from '@playwright/test';

test('OrangeHRM - hard & soft assertions + screenshot on failure', async ({ page }) => {
  // (Optional) keep overall test from running too long
  test.setTimeout(60000);

  console.log('A: open login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  // ✅ HARD ASSERTION (if this fails, test stops)
  console.log('B: hard assert login button');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible({ timeout: 15000 });

  console.log('C: enter username/password');
  await page.getByRole('textbox', { name: /username/i }).fill('Admin');
  await page.getByRole('textbox', { name: /password/i }).fill('admin123');

  console.log('D: click login');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('E: wait for dashboard');
  await page.waitForURL('**/dashboard/index', { timeout: 20000 });

  // ✅ SOFT ASSERTIONS (even if these fail, test continues)
  console.log('F: soft asserts');
  await expect.soft(page.getByRole('heading', { name: /dashboard/i }))
    .toBeVisible({ timeout: 10000 });

  await expect.soft(page.locator('span.oxd-userdropdown-tab'))
    .toBeVisible({ timeout: 10000 });

  // ❌ Intentional SOFT fail (continues)
  await expect.soft(page.getByText('WrongDashboardText'))
    .toBeVisible({ timeout: 3000 });

  // ❌ Intentional HARD fail (stops here; screenshot/trace/video will be saved)
  console.log('G: hard fail now');
  await expect(page.getByText('DefinitelyNotOnPage'))
    .toBeVisible({ timeout: 3000 });

  console.log('This will not print');
});
