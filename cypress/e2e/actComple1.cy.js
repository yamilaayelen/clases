/// <reference types="cypress" />

describe("Actividad complementaria 1: Yamila Vega", () =>{

    it('Registrarse en Pushing IT', () => {
        var numeroRandom = Math.floor(Math.random() * 1000)
        cy.visit("https://pushing-front.vercel.app/");
        cy.get('#user').type("Yamila");
        cy.get('#user').clear()
        cy.get('#user').type(`Yamila${numeroRandom}`);
        cy.get('#pass').type("123456!");
        cy.get(':nth-child(2) > input[value="Female"]').check({force: true});
        cy.get('#day').select("12");
        cy.get('#month').select("April");
        cy.get("#year").select("1991");
        cy.get('#submitForm').click();
    });
    
});