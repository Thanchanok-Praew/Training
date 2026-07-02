import {type Page, type Locator} from '@playwright/test';

/**
 * Page Object ของหน้า Catalog (รายการสินค้า)
 */
export class CatalogPage {
    readonly page: Page;

    // ---- Locators ----
    readonly btn_addToCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btn_addToCart = page.getByTestId('product-add-to-cart-5'); // ปุ่ม add สินค้า
    }

    // ---- Keywords ----

    async goto() {
        await this.page.goto('https://qademo.com/catalog');
    }

    async addToCart() {
        await this.btn_addToCart.click();
    }
}
