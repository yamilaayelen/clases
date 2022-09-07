/// <reference types="cypress" />

import { RegistroPage } from "../support/pages/registroPage"
import { LoginPage } from "../support/pages/loginPage"
import { TodoListPage } from "../support/pages/todoListPage"
import { HomePage } from "../support/pages/homePage"

describe('Desafio 2 + Act complementaria 6 - Yamila Vega', () => {
    let datosLogin;
    const registroPage = new RegistroPage();
    const loginPage = new LoginPage();
    const todoListPage = new TodoListPage();
    const homePage = new HomePage();
  
    before("Datos login", () => {
        cy.fixture("loginData").then(datos => {
            datosLogin = datos;
        })
    })
  
    beforeEach("Before each", () => {
        cy.visit("/")
        registroPage.clickIniciarSesionButton();
        loginPage.login(datosLogin.usuario, datosLogin.contraseña);
        
    })
  
    it('Act complementaria 6: interactuar con los botones all, completed, active', () => {
        homePage.clickTodoListLink();
        todoListPage.validarExistenciaBotonAll();
        todoListPage.validarExistenciaBotonCompleted();
        todoListPage.validarExistenciaBotonActive();
    })

})