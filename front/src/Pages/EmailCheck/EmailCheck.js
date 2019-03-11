import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { SIGN_FRAGMENT } from "Components/fragment";

const EmailCheckQuery = gql`
  query emailCheck($token: String!) {
    emailCheck(token: $token) {
      ...SignResultParts
    }
  }
  ${SIGN_FRAGMENT}
`;

const EmailCheck = ({
  match: {
    params: { token }
  }
}) => {
  const { loading, data } = useQuery(EmailCheckQuery, { variables: { token } });
  if (loading) return "loading";
  else {
    const {
      emailCheck: { message, success }
    } = data;
    alert(message);
    if (success) return (window.location.href = "http://localhost:3000/signIn");
    else return (window.location.href = "http://localhost:3000/sugnUp");
  }
};

export default EmailCheck;
