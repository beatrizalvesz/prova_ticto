            #language: pt

            Funcionalidade: Formulário
            Como usuário, desejo realizar o cadastro
            Para que possa visualizar a lista de usuários cadastrados

            @verificar_site
            Cenário: Verificar se o site está sendo acessado
            Dado que abro o navegador
            Quando o site é acessado
            Então o site é carregado com sucesso

            @cadastrar_happy
            Cenário: Realizar Cadastro com Sucesso
            Dado que eu acesso o site
            Quando eu insiro "Beatriz Alves", "beatrizalves@gmail.com" e "beatriz123"
            E clico em Cadastrar
            Então uma mensagem deve ser exibida
            E meu "Beatriz Alves" e "beatrizalves@gmail.com" estejam visíveis

            @cadastrar_falha_nome
            Cenário: Tentar Realizar Cadastro com Falha de Nome
            Dado que eu acesso o site
            Quando eu insiro "BeatrizAlves", "beatrizalves@gmail.com" e "beatriz123"
            E clico em Cadastrar
            Então uma mensagem de erro de nome deve ser exibida

            @cadastrar_falha_email
            Cenário: Tentar Realizar Cadastro com Falha de E-mail
            Dado que eu acesso o site
            Quando eu insiro "Beatriz Alves", "beatrizalves.com" e "beatriz123"
            E clico em Cadastrar
            Então uma mensagem de erro de e-mail deve ser exibida

            @cadastrar_falha_senha
            Cenário: Tentar Realizar Cadastro com Falha de Senha
            Dado que eu acesso o site
            Quando eu insiro "Beatriz Alves", "beatrizalves@gmail.com" e "beatriz"
            E clico em Cadastrar
            Então uma mensagem de erro de senha deve ser exibida

            @editar
            Cenário: Editar um usuário com sucesso
            Dado que eu acesso o site
            E que já tenho um usuário cadastrado
            Quando eu selecionar a ação "Editar"
            E inserir os novos dados de "Beatriz Santos" e "beatrizsantos@gmail.com"
            Então o sistema atualizará os dados

            @excluir
            Cenário: Excluir um usuário com sucesso
            Dado que eu acesso o site
            E que já tenho um usuário cadastrado
            Quando eu selecionar a ação "Excluir"
            E confirmo a exclusão
            Então o usuário será excluido