// Ações de Cadastro na Página

class Acessar {
    acessarFormulario(){
        cy.visit('https://qa-test.ticto.io/')
    }
}

export default new Acessar();