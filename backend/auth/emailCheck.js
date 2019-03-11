import { mariaDB } from "../db/connectDB";

const emailCheck = ({ token }) => {
  return findAccountByToken({ token });
};

const findAccountByToken = async ({ token }) => {
  const SearchSQL = `SELECT * FROM pknu_wiki_member WHERE token = '${token}'`;
  const [rows, fields] = await mariaDB.query(SearchSQL);
  return await sendMessage(rows[0]);
};

const COMPLETE_EMAIL_CHECK = "1";

const sendMessage = async rows => {
  console.log(rows);
  if (!rows)
    return {
      message: "존재하지 않는 계정입니다. 다시한번 확인해주세요!",
      success: false
    };
  const { emailcheck, token } = rows;
  if (emailcheck === COMPLETE_EMAIL_CHECK)
    return {
      message: "이미 인증이 완료된 계정입니다.! 로그인 해주세요",
      success: true
    };
  else {
    await updateEmailCheck({ token });
    return {
      message: "인증이 완료되었습니다. 다시 로그인 해주세요!",
      success: true
    };
  }
};

const updateEmailCheck = async ({ token }) => {
  const UpdateEmailCheckQuery = `UPDATE pknu_wiki_member SET emailcheck='1' WHERE token = '${token}'`;
  await mariaDB.query(UpdateEmailCheckQuery);
};

export default emailCheck;
