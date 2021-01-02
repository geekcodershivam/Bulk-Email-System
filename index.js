const xlsxFile = require('read-excel-file/node');
const mailer=require('./mailer')

        async function sendermail(email){
                  const mail=mailer.sendMails(email,"test7","demo");
                  await mail;
        }
        
            xlsxFile('./Data.xlsx',).then((rows) => {
                for (i in rows){
                        for (j in rows[i]){
                            sendermail(rows[i][0]);
                        }
                    }
                })
                