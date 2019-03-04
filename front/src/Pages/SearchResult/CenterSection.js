import React from "react";
import { useQuery } from "react";
import SEARCH_RESULT from "./SearchResult";

const CenterSection = ({ contentsName }) => {
  useQuery(SEARCH_RESULT, { variables: { contentsName } });
  return <div />;
};

export default CenterSection;
