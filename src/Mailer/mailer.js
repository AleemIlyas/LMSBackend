const nodemailer = require('nodemailer');


// create reusable transporter object using the default SMTP transport

// setup email data with unicode symbols

let sendEmail =  async function({email , body}){


    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'bitlearnlearning@gmail.com',
            pass: 'wybmmhtvoutuivjz'
        }
    });
    

let mailOptions = {
    from:email, // sender address
    to: '"BIT LEARN " <bitlearnlearning@gmail.com>', // list of receivers
    subject: 'Hello ✔ Message From BIT LEARN Web Site', // Subject line
    text: 'Hello world ?', // plain text body
    html: body + '<br/>' + email // html body
};

// send mail with defined transport object
    return transporter.sendMail(mailOptions)

}

module.exports = sendEmail;