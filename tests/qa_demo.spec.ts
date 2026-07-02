import {test} from '@playwright/test';
import {HomePage} from '../pages/home-page';
import {LoginPage} from '../pages/login-page';

let homePage: HomePage;
let loginPage: LoginPage;

test.describe("Login E2E Test", () => {

    test("Navigate to login page and login successfully", async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);

        await homePage.openCatalog();
        await homePage.clickLogin();

        await loginPage.login('standard_user', 'standard123');

        await loginPage.verifyLoginSuccess();
    });

});
