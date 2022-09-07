export class Navbar {


    verificarUsuario(usuario){
        cy.get(`[id^='user_${usuario}_']`).should("be.visible")
        //^  indica que el usuario comienza con pushingit....
    }
}