import {trp, sender} from './config.js';
import { APPROVAL_REQUEST_TEMPLATE, generateApplicationStatusEmail } from './emailTemplates.js';


const sendApprovalRequestEmail = async(email, user) => {
    const mailOptions = {
        from: sender,
        to: email,
        subject: "Approval Request",
        html: APPROVAL_REQUEST_TEMPLATE(user)
    }
    try {
        const info = await trp.sendMail(mailOptions)
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log(error);
        throw new Error(`Error sending verification email: ${error}`);
        
    }
    
}

const sendApplicationStatusEmail = async (user, status, password) => {
    const subject = status === 'accepted' ? 'Your Application is Approved' : 'Your Application is Rejected';
    const mailOptions = {
      from: sender,
      to: user.email,
      subject: subject,
      html: generateApplicationStatusEmail(user, status, password),
    };
  
    try {
      await trp.sendMail(mailOptions);
      console.log('Application status notification email sent successfully.');
    } catch (error) {
        throw new Error(`Error sending application status email: ${error}`);
        }
  };

export {sendApprovalRequestEmail, sendApplicationStatusEmail};