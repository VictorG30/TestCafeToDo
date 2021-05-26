import { Selector, t } from 'testcafe'

class HomePage{
    constructor(){
        this.RadioButtonAddTask = Selector('.icon_add')
        this.TxtNameTask = Selector('.DraftEditor-editorContainer > .notranslate.public-DraftEditor-content')
        this.BtnAddTask = Selector('.task_editor__form_actions > .ist_button.ist_button_red')

    }

 
    
    async AddTask(numTask)
    {
        const faker = require('faker');
        let lista=new Array();

        for (var i = 0; i < numTask; i++)
        {
            var firstName = faker.name.firstName();
            lista.push('Call to ' + firstName);
        }


        for (var j = 0; j < numTask; j++)
        {   


            try {            
                
                await t.typeText(this.TxtNameTask, lista[j], {paste:true})                
                await t.click(this.BtnAddTask)
        }
           catch (error) {
                await t.click(this.RadioButtonAddTask) 
                await t.typeText(this.TxtNameTask, lista[j], {paste:true})
                await t.click(this.BtnAddTask)         

        }      
     
        }   

    return lista;


    }   

    async GetElementsText(){
        
        let lista=new Array();
        
        const ItemsTxt = await Selector('.task_list_item__content__content_wrapper'); 
        const count = await ItemsTxt.count;

            for(let i=0; i<count; i++){ 
            lista.push(await ItemsTxt.nth(i).innerText);

            }
            
            return lista;
    }    

}

export default new HomePage()