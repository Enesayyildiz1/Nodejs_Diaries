var nodemailer = require("nodemailer");//Nodemailer modülünü kurduktan sonra projeye dahil etme

var transfer = nodemailer.createTransport({
    service:"",
    auth:{
        user:"",
        pass:""
    }
});

var mailbilgi = {
    from:"",
    to:"",
    subject:"",
    text:"",
};

transfer.sendMail(mailbilgi,function(error){
    if(error) console.log(error);
    else console.log("Mailiniz gönderildi!");
});
