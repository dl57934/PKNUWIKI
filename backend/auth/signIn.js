import { mariaDB } from "../db/connectDB";

const signIn = async ({ email, password }) => {
  if (await isExistUser({ email, password })) {
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

const isExistUser = async ({ email, password }) => {
  const SearchSQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}' and password = '${password}'`;

  const [rows, fields] = await mariaDB.query(SearchSQL);

  if (rows.length === FAULT_USER_INFO) return false;
  return true;
};

const signResultReturn = ({ success, message }) => {
  return { success, message };
};
