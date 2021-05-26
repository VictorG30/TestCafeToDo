import { Selector, t } from 'testcafe'


class WelcomePage {
    constructor(){
        this.BtnIniciarSesion = Selector('._3XsmI a[href="/users/showlogin"]')

    }



}

export default new WelcomePage()