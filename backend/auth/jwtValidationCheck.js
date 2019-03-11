import jwt from "jsonwebtoken";

const jwtValidationCheck = async ({ jsonWebToken }) => {
  try {
    jwt.verify(jsonWebToken, "secret");
    return true;
  } catch (e) {
    return false;
  }
};

export default jwtValidationCheck;
