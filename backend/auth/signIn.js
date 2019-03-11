import { mariaDB } from "../db/connectDB";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const signIn = async ({ email, password }) => {
  if (await isExistUser({ email, rawPassword: password })) {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        signIn: true
      },
      "secret"
    );

    return signResultReturn({
      success: true,
      message: "로그인을 성공하였습니다",
      jwt: token
    });
  } else {
    return signResultReturn({
      success: false,
      message: "아이디 혹은 비밀번호를 확인해주세요!!",
      jwt: ""
    });
  }
};

export default signIn;

const DONT_EMAIL_CHECK = "0";

const isExistUser = async ({ email, rawPassword }) => {
  const SearchSQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}'`;

  const [rows, fields] = await mariaDB.query(SearchSQL);

  if (!rows[0]) return false;
  else if (await wrongPasswordOrEmailCheck(rows[0], rawPassword)) return false;
  return true;
};

const wrongPasswordOrEmailCheck = async (rows, rawPassword) => {
  const { password, emailcheck, salt } = rows;
  return (
    (await isCorrectPassword({ rawPassword, password, salt })) ||
    emailcheck === DONT_EMAIL_CHECK
  );
};

const signResultReturn = ({ success, message, jwt }) => {
  return { success, message, jwt };
};

const isCorrectPassword = async ({ rawPassword, password, salt }) => {
  const encryptionPassword = await crypto
    .pbkdf2Sync(rawPassword, salt, 100000, 64, "sha512")
    .toString("base64");

  return password !== encryptionPassword;
};
