import { mariaDB } from "../db/connectDB";
import crypto from "crypto";

const signIn = async ({ email, password }) => {
  if (await isExistUser({ email, rawPassword: password })) {
    return signResultReturn({
      success: true,
      message: "로그인을 성공하였습니다"
    });
  } else {
    return signResultReturn({
      success: false,
      message: "아이디 혹은 비밀번호를 확인해주세요!!"
    });
  }
};

export default signIn;

const FAULT_USER_INFO = 0;
const DONT_EMAIL_CHECK = "0";

const isExistUser = async ({ email, rawPassword }) => {
  const SearchSQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}'`;

  const [rows, fields] = await mariaDB.query(SearchSQL);
  const { password, emailcheck, salt } = rows[0];

  if (
    rows.length === FAULT_USER_INFO ||
    emailcheck === DONT_EMAIL_CHECK ||
    (await isCorrectPassword({ rawPassword, password, salt }))
  )
    return false;
  return true;
};

const signResultReturn = ({ success, message }) => {
  return { success, message };
};

const isCorrectPassword = async ({ rawPassword, password, salt }) => {
  const encryptionPassword = await crypto
    .pbkdf2Sync(rawPassword, salt, 100000, 64, "sha512")
    .toString("base64");
  return password !== encryptionPassword;
};
