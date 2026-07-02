import {type Page, type Locator, expect} from '@playwright/test';

/**
 * Page Object ของหน้า Home
 * เก็บ locator + keyword (method) ของหน้านี้ไว้ในตัว
 */
export class HomePage {
    readonly page: Page;

    // ---- Locators ----
    readonly lbl_heading: Locator;
    readonly btn_login: Locator;

    constructor(page: Page) {
        this.page = page;
        this.lbl_heading = page.getByTestId('home-heading');
        this.btn_login = page.getByTestId('navbar-signin-link');
    }

    // ---- Keywords (action ที่ใช้ซ้ำได้) ----

    async openCatalog() {
        await this.page.goto('https://qademo.com/catalog');
    }

    async verifyHeadingText(expected: string) {
        await expect(this.lbl_heading).toHaveText(expected);
    }

    async clickLogin() {
        await this.btn_login.click();
    }
}
