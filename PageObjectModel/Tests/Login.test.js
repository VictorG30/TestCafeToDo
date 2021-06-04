/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import LoginPage from '../Pages/LoginPage';
import { CREDENTIALS } from '../Data/Constant';
import SideBarPage from '../Pages/SideBarPage';

fixture.only('Login feature testing')
  .page`https://todoist.com/es`;

test('Login User Valid', async (t) => {
  await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
  await t.expect(SideBarPage.BtnAvatar.exists).ok();
});

test('Login Invalid', async (t) => {
  await LoginPage.LoginSubmit(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD);
  await t.expect(LoginPage.ErrorMessage.exists).ok();
  await t.expect(LoginPage.ErrorMessage.innerText).eql('Invalid email address.');
});

test('Login Invalid empty fields', async (t) => {
  await LoginPage.LoginSubmit('', '');
  await t.expect(LoginPage.ErrorMessage.exists).ok();
  await t.expect(LoginPage.ErrorMessage.innerText).eql('Invalid email address.');
});
