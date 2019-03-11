import { mariaDB } from "../db/connectDB";
import { createTransport } from "nodemailer";
import crypto from "crypto";
const signUp = async ({ email, name, password }) => {
  if (await isDuplicatedAccount(email))
    return { success: false, message: "중복되는 아이디가 존재합니다." };
  else {
    const token = await getToken();
    await saveAccount({ email, password, name, token });
    await sendEmail(email, token);
    return {
      message: "회원가입이 완료되었습니다. 부경대학교 이메일을 확인해주세요!",
      success: true
    };
  }
};

const getToken = async () => {
  const token = await crypto
    .randomBytes(64)
    .toString("base64")
    .split("/")[0];
  return token;
};

const isDuplicatedAccount = async email => {
  const SEARCH_DUPLICATED_ID_SQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}'`;
  const DUPLICATED_ID = 1;

  const [rows, tables] = await mariaDB.query(SEARCH_DUPLICATED_ID_SQL);
  if (rows.length === DUPLICATED_ID) return true;
  else return false;
};

const saveAccount = async ({ email, password, name, token }) => {
  const salt = await crypto.randomBytes(64).toString("base64");

  const encryptionPassword = crypto
    .pbkdf2Sync(password, salt.toString("base64"), 100000, 64, "sha512")
    .toString("base64");

  const SAVE_ACCOUNT_SQL = `INSERT INTO pknu_wiki_member (email, name, password, token, emailcheck, salt) values('${email}', '${name}', '${encryptionPassword}', '${token}','0', '${salt}');`;
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
    html: `<h1>아래의 웹사이트에 접속하시면 회원가입이 완료됩니다.</h1><br/><a href=http://localhost:3000/emailCheck/${token}>여길 눌러주세요!!</a>`
  };
  transporter.sendMail(mailOptions);
};

export default signUp;
