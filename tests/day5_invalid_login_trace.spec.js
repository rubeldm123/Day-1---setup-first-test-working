import{test, expect} from '@playwright/test';
import { error } from 'node:console';

test.only('Invalid login shows error message', async ({page})=>{
    console.log('1. Navigatiing to the login page');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('2. ENtering invalide user name ');
    await page.getByPlaceholder('Username').fill('Wrong username');

    console.log('3. Entering invalid password');
    await page.getByPlaceholder('Password').fill('Wrong password');

    console.log('4. Clicking on the login button');
    await page.getByRole('button',{name:'Login'}).click();

    console.log('5. Verifying the error message is displayed');
    const errorMsg=page.locator('oxd-alert-content-text');
    await expect(errorMsg).toHaveText('Invalid credentials');



})