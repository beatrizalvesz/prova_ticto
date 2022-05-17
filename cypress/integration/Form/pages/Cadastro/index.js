// Ações de Cadastro na Página

const el = require('./elements').ELEMENTS;

class Cadastrar {
    NovoCadastro(nome, email, senha){
        cy.get(el.campo_nome).type(nome)
        cy.get(el.campo_email).type(email)
        cy.get(el.campo_senha).type(senha)
    }
    ClicarBotaoCadastro(){
        cy.get(el.botao).contains('Cadastrar').click()
    }
    Preenchercadastroqualquer(){
        this.NovoCadastro('Maria João','mariajoao@gmail.com','mariajoao');
        this.ClicarBotaoCadastro();
    }
    Mostrar_mensagem_sucesso(){
        cy.get(el.alerta).should('be.visible');
        cy.get(el.alerta).should('contain', el.mensagem_sucesso)
    }
    Mostrar_mensagem_erro_nome(){
        cy.get(el.texto_erro)
        .should('be.visible')
        .should('contain', el.mensagem_erro_nome)
    }
    Mostrar_mensagem_erro_senha(){
        cy.get(el.texto_erro)
        .should('be.visible')
        .should('contain', el.mensagem_erro_senha)
    }
    VerificarCadastro(nome, email){
        cy.get(el.tabela_cadastros).should('contain', nome)
	    cy.get(el.tabela_cadastros).should('contain', email)
    }
}

export default new Cadastrar();