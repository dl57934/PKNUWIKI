import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";

const EditOrWrite = ({ isEdit }) => {
  return <BackgroundView CenterSection={CenterSection} isEdit={isEdit} />;
};

export default EditOrWrite;
