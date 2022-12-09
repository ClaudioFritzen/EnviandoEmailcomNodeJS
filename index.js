const nodemailer = require('nodemailer');


require('dotenv').config();
const PASSWORD = process.env.password;
const EMAIL = process.env.email;

const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:EMAIL,
        pass:PASSWORD,
    }
})

// 
transport.sendMail({
    from: "Fritzen Code", EMAIL,
    to: process.env.mandar_email ,
    subject: "Enviando mail teste",
    html: "<h1> Olá Dev</h1> <p> Esse email foi enviado com o nodemailer</p>",
    text: "<h1> Olá Dev</h1> <p> TEXT email foi enviado com o nodemailer</p>",
})
.then(() => console.log("Email enviado com sucesso!"))
.catch((err) => console.log("Erro ao enviar email: ", err));