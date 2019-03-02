import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";

const EditOrWrite = ({ match }) => {
  return (
    <BackgroundView CenterSection={CenterSection} isEdit={isEdit({ match })} />
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
