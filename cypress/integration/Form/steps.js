import Acessar from '../Form/pages/Acesso'
import Cadastrar from '../Form/pages/Cadastro'
import Acao from '../Form/pages/Ação'

Given(/^que abro o navegador$/, () => {
	return true;
});

When(/^o site é acessado$/, () => {
	Acessar.acessarFormulario();
});

Then(/^o site é carregado com sucesso$/, () =>{
    cy.contains('Formulário')
});

Given(/^que eu acesso o site$/, () => {
	Acessar.acessarFormulario();
});

When(/^eu insiro "([^"]*)", "([^"]*)" e "([^"]*)"$/, (nome,email,senha) => {
	Cadastrar.NovoCadastro(nome, email, senha);
});

When(/^clico em Cadastrar$/, () => {
	Cadastrar.ClicarBotaoCadastro();
});


Then(/^uma mensagem deve ser exibida$/, () => {
	Cadastrar.Mostrar_mensagem_sucesso();
});


Then(/^meu "([^"]*)" e "([^"]*)" estejam visíveis$/, (nome,email) => {
	Cadastrar.VerificarCadastro(nome, email);
});


Then(/^uma mensagem de erro de nome deve ser exibida$/, () => {
	Cadastrar.Mostrar_mensagem_erro_nome();
});

Then(/^uma mensagem de erro de e-mail deve ser exibida$/, () => {
	return false;
});

Then(/^uma mensagem de erro de senha deve ser exibida$/, () => {
	Cadastrar.Mostrar_mensagem_erro_senha();
});

Given(/^que já tenho um usuário cadastrado$/, () => {
	Cadastrar.Preenchercadastroqualquer();
});

When(/^eu selecionar a ação "([^"]*)"$/, (acao) => {
	Acao.PegarPrimeiroItem(acao);
	
});
When(/^inserir os novos dados de "([^"]*)" e "([^"]*)"$/, (nome,email) => {
	return false;
});

When(/^confirmo a exclusão$/, () => {
	return false;
});

Then(/^o sistema atualizará os dados$/, () =>{
    return false;
});

Then(/^o usuário será excluido$/, () =>{
    return false;
});