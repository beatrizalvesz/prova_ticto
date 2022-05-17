// Ações de Cadastro na Página

const el = require('./elements').ELEMENTS;

class Acao {
    EditarUsuario(index, nome, email){
        cy.get(el.campo_nome).type(nome)
        cy.get(el.campo_email).type(email)
    }
    ClicarBotao(acao){
        cy.get(el.botao_dropdown).contains(acao).click()
    }

    PegarPrimeiroItem(acao){
        cy.get(el.primeiro_id).invoke('text').then(($index) => {
            cy.log($index)
            let opcao;
            switch (acao){
                case "Excluir":
                    opcao = '[id="modalDelete'+$index+'"]';
                    break;
    
                case "Editar":
                    opcao = '[id="modalEdit'+$index+'"]';
    
            }
            cy.get(el.primeiro_botao_acoes).click()
            cy.get(opcao).click({force: true})
        })
        
    }
}

export default new Acao();