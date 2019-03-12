import React from "react";
import { useQuery } from "react-apollo-hooks";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { CHECK_VERIFY_JWT, jwtCheckResult } from "Hooks/ManageJWT";

const SignUp = () => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    const { data, loading } = useQuery(CHECK_VERIFY_JWT, {
      variables: { jwt }
    });
    return jwtCheckResult(loading, data);
  }
  return <BackgroundView CenterSection={CenterSection} />;
};

export default SignUp;
