import { mariaDB } from "../db/connectDB";

const signIn = ({ email, password }) => {
  const SearchSQL = `SELECT * FROM pknu_wiki_member WHERE email = '${email}' and password = '${password}'`;
  let isSuccessLogin;
  mariaDB.query(SearchSQL, (err, rows, fields) => {
    if (rows.length > 0) isSuccessLogin = true;
    else isSuccessLogin = false;
  });
  if (isSuccessLogin)
    return signResultReturn({
      success: true,
      message: "로그인을 성공하였습니다"
    });
  else
    return signResultReturn({
      success: false,
      message: "아이디 혹은 비밀번호를 확인해주세요!!"
    });
};

export default signIn;

const signResultReturn = ({ success, message }) => {
  return { success, message };
};
