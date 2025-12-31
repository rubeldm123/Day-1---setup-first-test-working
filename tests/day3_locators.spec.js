import {test, expect} from '@playwright/test';

test.only('Login and navigate to PIM module using stable locators', async({page})=>{
    //1.Go to OrangeHRM Logoin page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //2.Enter username(using placeholder -stable locator)
    await page.getByPlaceholder('Username').fill('Admin');

    //3. Enter password(using placeholder -stable locator)
    await page.getByPlaceholder('Password').fill('admin123');

    //4. click on Login button using role-based locator
    await page.getByRole('button', {'name':'Login'}).click();

    //5. Click PIM menu using visible text locator
    await page.getByText('PIM').click();
    //6. Verify PIM page is displayed by checking the URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    await page.pause()

})