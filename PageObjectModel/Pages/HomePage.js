/* eslint-disable class-methods-use-this */
/* eslint-disable no-array-constructor */
/* eslint-disable global-require */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { Selector, t } from 'testcafe';

class HomePage {
  constructor() {
    this.RadioButtonAddTask = Selector('.icon_add');
    this.TxtNameTask = Selector('.DraftEditor-editorContainer > .notranslate.public-DraftEditor-content');
    this.BtnAddTask = Selector('.task_editor__form_actions > .ist_button.ist_button_red');
    this.BtnDoneTask = Selector('.task_checkbox');
    this.BtnCloseModal = Selector('.close');
  }

  async AddTask(numTask) {
    const faker = require('faker');
    const lista = new Array();

    for (let i = 0; i < numTask; i++) {
      const firstName = faker.name.firstName();
      lista.push(`Call to ${firstName}`);
    }

    for (let j = 0; j < numTask; j++) {
      if (j === 0) {
        //await t.click(this.BtnCloseModal);
        await t.click(this.RadioButtonAddTask);
        await t.typeText(this.TxtNameTask, lista[j], { paste: true });
        await t.click(this.BtnAddTask);
      } else {
        await t.typeText(this.TxtNameTask, lista[j], { paste: true });
        await t.click(this.BtnAddTask);
      }
    }

    return lista;
  }

  async GetElementsText() {
    const lista = new Array();

    const ItemsTxt = await Selector('.task_list_item__content__content_wrapper');
    const count = await ItemsTxt.count;

    for (let i = 0; i < count; i++) {
      lista.push(await ItemsTxt.nth(i).innerText);
    }

    return lista;
  }

  async DoItTask() {
    const ItemsTask = await Selector('.task_checkbox');
    let count = await ItemsTask.count;

    while (count > 1) {
      await t.click(ItemsTask.nth(0));
      count = await ItemsTask.count;
    }
  }
}

export default new HomePage();
