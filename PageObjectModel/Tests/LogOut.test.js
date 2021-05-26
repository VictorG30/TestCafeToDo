/* eslint-disable no-undef */
import LoginPage from '../Pages/LoginPage';
import { CREDENTIALS } from '../Data/Constant';
import SideBarPage from '../Pages/SideBarPage';
import WelcomePage from '../Pages/WelcomePage';

fixture('LogOut feature testing')
  .page`https://todoist.com/es`
  .beforeEach(async (t) => {
    await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
  });

test('LogOut User', async (t) => {
  await SideBarPage.LogOut();
  await t.expect(WelcomePage.BtnIniciarSesion.exists).ok();
});
