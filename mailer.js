const nodemailer = require('nodemailer');
var {email,pass} = require('./config/mail');


module.exports.sendMails=(to,subject,message)=>{
  return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: false,
      auth: {
          type: "login",
          user: email,
          pass: pass
      }
    });

    var mail = {
      from: email,
      to: to,
      subject: subject,
      html: message
    };

    transporter.sendMail(mail,function(err,info){
      if(err){
          reject(err);
      }
      else {
          resolve(info)
          console.log('email sent to :'+ to);
      }
    })

})
}