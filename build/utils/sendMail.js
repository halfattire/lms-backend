"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const sendmail = async (options) => {
    console.log("sendmail");
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMPT_PORT || "587"),
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    const { email, subject, template, data } = options;
    //get the path to email template file
    const templatePath = path_1.default.join(__dirname, "../mails", template);
    //render the email template with ejs
    const html = await ejs_1.default.renderFile(templatePath, data);
    const mailoptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        html, // simple template (.ejs file)
    };
    try {
        await transporter.sendMail(mailoptions);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = sendmail;
