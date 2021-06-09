import { Selector, t } from 'testcafe';

class SideBarPage {
  constructor() {
    this.BtnMenu = Selector('#react-burger-menu-btn');
    this.OptionLogOut = Selector('#id-a5qqvk-9');
    this.BtnAvatar = Selector('.user_avatar', { timeout: 1000000 });
  }

  async LogOut() {
    await t.click(this.BtnAvatar);
    await t.click(this.OptionLogOut);
  }
}

export default new SideBarPage();
