import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";

const EditOrWrite = ({ match }) => {
  const {
    params: { contentName }
  } = match;

  return (
    <BackgroundView
      CenterSection={CenterSection}
      isEdit={isEdit({ match })}
      searchName={contentName}
    />
  );
};

const isEdit = ({ match }) => {
  console.log(match);
  let { url } = match;
  url = url.split("/")[1];
  if (url === "write") return false;
  else return true;
};

export default EditOrWrite;
