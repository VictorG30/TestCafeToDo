import { Selector, t } from 'testcafe';

class SideBarPage {
  constructor() {
    this.BtnMenu = Selector('#react-burger-menu-btn');
    this.OptionLogOut = Selector('[role="menuitem"]').withText('Cerrar sesión');
    this.BtnAvatar = Selector('.user_avatar', { timeout: 5000 });
  }

  async LogOut() {
    await t.click(this.BtnAvatar);
    await t.click(this.OptionLogOut);
  }
}

export default new SideBarPage();
