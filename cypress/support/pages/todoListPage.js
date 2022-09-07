export class TodoListPage{

    constructor(){
        this.taskInput = '#task'
        this.sendTaskButton = "//button[@id='sendTask']"
        this.allButton = "#all"
        this.completedButton = "#completed"
        this.activeButton = "#active"
    }

    escribirTarea(tarea){
        cy.get(this.taskInput).type(tarea);
    }

    clickSendButton(){
        cy.xpath(this.sendTaskButton).click();
    }

    completarTarea(tarea){
        cy.contains(tarea).click();
    }

    eliminarTarea(tarea){
        cy.contains(tarea).siblings("button").click();
    }

    validarExistenciaBotonAll(){
        cy.get(this.allButton).should("exist");
    }

    validarExistenciaBotonCompleted(){
        cy.get(this.completedButton).should("exist");
    }

    validarExistenciaBotonActive(){
        cy.get(this.activeButton).should("exist");
    }
    
}