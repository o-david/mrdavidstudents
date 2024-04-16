import nodemailer from 'nodemailer';


const emailSender = (reciepient, subject, code) => {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'okekedavid1333@gmail.com',
    pass: 'tscz cxib xsad rtjx'
  }
});

var mailOptions = {
  from: 'okekedavid1333@gmail.com',
  to: reciepient,
  subject: subject,
  html: `<div style="color:red;width:50%;margin:10px auto">
  <h1>Please click the link below to confirm yoour accoount</h1>
  <a href='http://localhost:4002/user/confirm/${code}' style='background-color:green; color:white'>Verify</a>
    
  </div>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default emailSender