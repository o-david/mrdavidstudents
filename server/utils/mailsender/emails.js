import {trp, sender} from './config.js';
import { APPROVAL_REQUEST_TEMPLATE } from './emailTemplates.js';


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

export {sendApprovalRequestEmail};