/* eslint-disable arrow-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable template-tag-spacing */
/* eslint-disable no-undef */
import LoginPage from '../Pages/LoginPage';
import { CREDENTIALS } from '../Data/Constant';
import HomePage from '../Pages/HomePage';

fixture('Add Tasks')
  .page `https://todoist.com/es`
  .beforeEach(async t=> {
    await LoginPage.LoginSubmit(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
  });

test('Add new task', async t => {
  const NameTaskAdd = await HomePage.AddTask(1);
  const NamesTasksUI = await HomePage.GetElementsText();

  await t.expect(NameTaskAdd).eql(NamesTasksUI);
  await HomePage.DoItTask();
});

test('Add several tasks', async t => {
  const NameTaskAdd = await HomePage.AddTask(10);
  const NamesTasksUI = await HomePage.GetElementsText();

  await t.expect(NameTaskAdd).eql(NamesTasksUI);
  await HomePage.DoItTask();
});
