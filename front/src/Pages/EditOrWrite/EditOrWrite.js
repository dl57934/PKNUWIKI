import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { EDIT_PAGE } from "./query";
import { useQuery } from "react-apollo-hooks";
import { CHECK_VERIFY_JWT, initialJWT } from "Hooks/ManageJWT";

const EditOrWrite = ({
  match: {
    url,
    params: { contentName }
  }
}) => {
  const edit = isEdit(url);

  if (edit) {
    const { loading, data } = useQuery(EDIT_PAGE, {
      variables: { contentName, jwt: localStorage.getItem("jwt") }
    });

    return QueryExecute(loading, data, editStrategy(data, contentName, edit));
  } else {
    const { loading, data } = useQuery(CHECK_VERIFY_JWT, {
      variables: { jwt: localStorage.getItem("jwt") }
    });

    return QueryExecute(loading, data, writeStrategy(contentName, edit));
  }
};

const QueryExecute = (loading, data, strategy) => {
  if (loading) return "로딩중!!";
  else if (!data.isValidationJwt) return initialJWT();
  else return strategy;
};

const isEdit = url => {
  url = url.split("/")[1];
  if (url === "write") return false;
  else return true;
};

const editStrategy = (data, contentName, edit) => {
  return (
    <BackgroundView
      CenterSection={CenterSection}
      isEdit={edit}
      contentName={contentName}
      data={data}
    />
  );
};

const writeStrategy = (contentName, edit) => {
  return (
    <BackgroundView
      CenterSection={CenterSection}
      isEdit={edit}
      contentName={contentName}
    />
  );
};

export default EditOrWrite;
