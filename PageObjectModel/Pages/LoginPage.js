import { Selector, t } from 'testcafe'
import WelcomePage from '../Pages/WelcomePage'



class LoginPage {
    constructor(){

        this.TxtUser = Selector('#email')
        this.TxtPassword = Selector('#password')
        this.BtnLogin = Selector('.sel_login')
        this.ErrorMessage = Selector('.error_msg')
    }

    async LoginSubmit(username, password){
            await t.click(WelcomePage.BtnIniciarSesion)
        try{
            await t.typeText(this.TxtUser, username, {paste:true})
            await t.typeText(this.TxtPassword, password,{paste:true})
            } 
        catch (error) { }
            await t.click(this.BtnLogin)

}}

export default new LoginPage()