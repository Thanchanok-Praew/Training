import {type Page, type Locator, expect} from '@playwright/test';

/**
 * Page Object ของหน้า Login
 * TODO: แทนค่า testid ด้านล่างด้วยของจริงจากหน้าเว็บ
 */
export class LoginPage {
    readonly page: Page;

    // ---- Locators ----
    readonly txt_username: Locator;
    readonly txt_password: Locator;
    readonly btn_signIn: Locator;
    readonly lbl_accountMenu: Locator; // element ที่โผล่มาเมื่อ login สำเร็จ (เช่น เมนูบัญชี)

    constructor(page: Page) {
        this.page = page;
        // หน้านี้ไม่มี data-testid จึงใช้ accessible name (role/label) แทน
        this.txt_username = page.getByRole('textbox', {name: 'Username'});
        this.txt_password = page.getByRole('textbox', {name: 'Password'});
        this.btn_signIn = page.getByTestId('login-submit-button'); // ปุ่ม Sign In ในฟอร์ม (navbar ก็มีปุ่มชื่อเดียวกัน จึงใช้ testid ที่ unique)
        this.lbl_accountMenu = page.getByTestId('navbar-user-menu'); // TODO: ยังไม่รู้ ต้องดูหน้าหลัง login สำเร็จ
    }

    // ---- Keywords ----

    async login(username: string, password: string) {
        await this.txt_username.fill(username);
        await this.txt_password.fill(password);
        await this.btn_signIn.click();
    }

    async verifyLoginSuccess() {
        await expect(this.lbl_accountMenu).toBeVisible();
    }
}
