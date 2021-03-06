import {getToday} from "./utils.js";
import nodemailer from 'nodemailer';
import 'dotenv/config'

export function isEmailValid(str){
    if(str === '') return false;
    if(!str.includes('@')) return false;
    
    return true;
}

export function getWelcomeTemplate({ userName, userPhoneNumber, userPreferSite }){
    const mytemplate = `
        <html>
            <body>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 500px;">
                        <h1>${userName}님 가입을 환영합니다!</h1>
                        <hr />
                        <div>이름: ${userName}</div>
                        <div style="color : purple;">전화번호: ${userPhoneNumber}</div>
                        <div style="color : purple;">좋아하는 사이트: ${userPreferSite}</div>
                        <div style="color : red;">가입일: ${getToday()}</div>
                    </div>
                </div>
            </body>
        </html>
    `
    return mytemplate;
}

export async function sendEmail(email, result){
    // console.log(`${email}님께 발송.. ${result}`);
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })

    const response = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "가입을 환영합니다! ^^/",
        html: result
    })

    console.log(response);

}