import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { EDIT_PAGE } from "./query";
import { useQuery } from "react-apollo-hooks";

const EditOrWrite = ({
  match: {
    params: { contentName },
    url
  }
}) => {
  const edit = isEdit(url);
  if (edit) {
    const { loading, data } = useQuery(EDIT_PAGE, {
      variables: { contentName }
    });
    if (loading) return "로딩중!!";
    else return editStrategy(data, contentName, edit);
  } else return writeStrategy(contentName, edit);
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
