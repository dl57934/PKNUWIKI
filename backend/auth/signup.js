import { mariaDB } from "../db/connectDB";
import { createTransport } from "nodemailer";

const signUp = async ({ email, name, password }) => {
  if (await isDuplicatedAccount(email))
    return { success: false, message: "중복되는 아이디가 존재합니다." };
  else {
    await saveAccount({ email, password, name });
    await sendEmail(email);
    return {
      message: "회원가입이 완료되었습니다. 부경대학교 이메일을 확인해주세요!",
      success: true
    };
  }
};

const isDuplicatedAccount = async email => {
  const SEARCH_DUPLICATED_ID_SQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}'`;
  const DUPLICATED_ID = 1;

  const [rows, tables] = await mariaDB.query(SEARCH_DUPLICATED_ID_SQL);
  console.log(rows);
  if (rows.length === DUPLICATED_ID) return true;
  else return false;
};

const saveAccount = async ({ email, password, name }) => {
  const SAVE_ACCOUNT_SQL = `INSERT INTO pknu_wiki_member (email, name, password, token, emailcheck) values('${email}', '${name}', '${password}', '0','0');`;
  const [rows, tables] = await mariaDB.query(SAVE_ACCOUNT_SQL);
};

const sendEmail = (email, token) => {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "dl57934@gmail.com",
      pass: "!dngmadl14"
    }
  });
  let mailOptions = {
    from: "dl57934@gmail.com", // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email, // 수신 메일 주소
    subject: "부경위키 회원가입 인증입니다.", // 제목
    html: `<h1>아래의 웹사이트에 접속하시면 회원가입이 완료됩니다.</h1><br/><a href=http://localhost:3000/부경위키:대문>여길 눌러주세요!!</a>`
  };
  transporter.sendMail(mailOptions);
};

export default signUp;
