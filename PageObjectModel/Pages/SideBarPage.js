import { Selector, t } from 'testcafe'

class SideBarPage{
    constructor(){
        this.BtnMenu = Selector('#react-burger-menu-btn')
        this.OptionLogOut = Selector('.user_menu_label').withText('Cerrar sesión')
        this.BtnAvatar = Selector('.user_avatar')



    }

    async LogOut(){
        
        await t.click(this.BtnAvatar)
        await t.click(this.OptionLogOut)        

    }
}

export default new SideBarPage()