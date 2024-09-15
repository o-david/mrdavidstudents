import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const trp = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.COMPANY_PASSWORD
    }
  });
const sender = process.env.COMPANY_EMAIL;
export {trp, sender};
