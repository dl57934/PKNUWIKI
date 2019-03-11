import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { useQuery } from "react-apollo-hooks";
import { CHECK_VERIFY_JWT, jwtCheckResult } from "Hooks/ManageJWT";

const Login = () => {
  if (localStorage.getItem("jwt")) {
    const { data, loading } = useQuery(CHECK_VERIFY_JWT, {
      variables: { jwt: localStorage.getItem("jwt") }
    });
    return jwtCheckResult(loading, data);
  } else return <BackgroundView CenterSection={CenterSection} />;
};

export default Login;
