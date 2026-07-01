import {test, expect, type Locator} from '@playwright/test';
import {locators} from '../pages/locators';

// ประกาศตัวแปรไว้ก่อน แล้วค่อย assign ใน beforeEach (ตอนนั้นถึงจะมี page)
let heading: Locator;

test.beforeEach(async ({page}) => {
    await page.goto('https://qademo.com/catalog');
    heading = page.getByTestId(locators.catalog.heading);
});

test('Verify catalog page title', async () => {
    await expect(heading).toHaveText('Product Catalog');
});