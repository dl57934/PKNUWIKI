import React, { useState, useEffect } from "react";
import CenterSection from "./CenterSection";
import BackgroundView from "Components/BackgroundView";

const Viewer = () => {
  const markdown = "### HI PKNUWIKI";
  return <BackgroundView CenterSection={CenterSection} markdown={markdown} />;
};

export default Viewer;
