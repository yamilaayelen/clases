/// <reference types="cypress" />

describe('Hooks', () => {
    let loginDataAc4, numeroRandom;

    before("Before", () => {
        cy.log("Before");
        cy.fixture("loginDataAc4").then(datos => {
            loginDataAc4 = datos;
        })
        numeroRandom = Math.floor(Math.random() * 1000)
    })
    beforeEach("Before each", () => {
        cy.log("Before each se esta ejecutando");
        cy.visit("/")
        cy.get("#registertoggle").dblclick();
    })

    it('Ingresa al sistema con datos inválidos, muestra mensaje de error', () => {
        cy.get("#user").type(loginDataAc4.usuario);
        cy.get("#pass").type(loginDataAc4.contraseña);
        cy.xpath("//button[contains(text(), 'Log in')]").click();
        cy.get("p").contains("Las credenciales son invalidas").should("have.text", loginDataAc4.msjError);
    });

    afterEach("After each", () => {
        cy.log("after each")
    })

    after("After", () => {
        cy.log("After")
    })

})