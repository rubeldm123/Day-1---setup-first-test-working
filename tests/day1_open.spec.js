import{test, expect} from'@playwright/test';
test('Open OrangeHRM login page and verify title', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHR8&M');
})