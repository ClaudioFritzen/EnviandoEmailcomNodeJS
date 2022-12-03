# Objetivo do projeto.

    # enviar email com o google gmail

# Como iniar o projeto:
1.1 npm init -y
1.2 npm install nodemailer
1.3 Criar o index js

# importações no index.js 
conts nodemail = require("nodemailer");

#criando o tranpost 

// https://support.microsoft.com/pt-br/office/configura%C3%A7%C3%B5es-pop-imap-e-smtp-8361e398-8af4-4e97-b147-6c6c4ac95353

// enviando com hotmail
const transport = nodemailer.createtransport({
    host:'smtp.office365.com'
    port: 587
    secure:false     //boll a porta  {} e para o resto falso
    auth: {
        uer: 'seu email'
        pass: sua senha
    }
})



// enviando com google gmail
const transport = nodemailer.createtransport({
    host:"smtp.gmail.com",
    port: 465,
    secure:true     //boll a porta  465 e para o resto falso
    auth: {
        uer: 'seu email'
        pass: sua senha // senha do app criado, não é a sua senha do google

    }
})


// 
// envando com gmail do google.
 vai na pag inicail do google e clica na sua foto.
    isso te levara para o accounts do google
        clica em segurança
            desçe ate a parte onde diz "Como fazer login no google"
                clica em senha de app
                    faça login
                        clica onde diz selecionar app 
                            coloca outros e colona um nome 
                                clica em gerar senha
                                    PEGUE A SENHA!!!   