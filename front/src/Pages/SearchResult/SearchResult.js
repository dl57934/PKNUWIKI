import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";

const SearchResult = ({
  match: {
    params: { name }
  }
}) => {
  return <BackgroundView CenterSection={CenterSection} contentsName={name} />;
};

export default SearchResult;
