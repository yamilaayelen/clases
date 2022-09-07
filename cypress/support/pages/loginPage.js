export class LoginPage {
    constructor(){
        this.usernameInput = "#user";
        this.passwordInput = "#pass";
        this.loginButton = "#submitForm";
    }

    escribirUsuario(usuario){
        cy.get(this.usernameInput).type(usuario);
    }

    escribirContraseña(contraseña){
        cy.get(this.passwordInput).type(contraseña);
    }

    clickLoginButton(contraseña){
        cy.get(this.loginButton).click();
    }

    login(usuario,contraseña){
        this.escribirUsuario(usuario);
        this.escribirContraseña(contraseña);
        this.clickLoginButton();
    }

}