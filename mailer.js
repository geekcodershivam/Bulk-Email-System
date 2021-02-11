const nodemailer = require('nodemailer');
var {email,pass} = require('./config/mail');


module.exports.sendMails=(to,subject,message)=>{
  return new Promise(function (resolve, reject) {
    var transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com",
      port: 465,
      secure: true,
      pool: true,
      auth: {
          type: "login",
          user: email,
          pass: pass
      },
      connectionTimeout: 30000,
      maxMessages:300
    });

    var mail = {
      from: email,
      to: to,
      subject: subject,
      html: message,
      header: {
        "x-priority": "1",
        "x-msmail-priority": "High",
        importance: "high"
      }
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