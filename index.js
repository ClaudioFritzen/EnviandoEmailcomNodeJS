const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:"sdfritzen96@gmail.com",
        pass:"qzetasgyzjnjrgdc",
    }
})

// 
transport.sendMail({
    from: "Fritzen Code <>",
    to: "sdfritzen96@gmail.com",
    subject: "Enviando mail teste",
    html: "<h1> Olá Dev</h1> <p> Esse email foi enviado com o nodemailer</p>",
    text: "<h1> Olá Dev</h1> <p> TEXT email foi enviado com o nodemailer</p>",
})
.then(() => console.log("Email enviado com sucesso!"))
.catch((err) => console.log("Erro ao enviar email: ", err));