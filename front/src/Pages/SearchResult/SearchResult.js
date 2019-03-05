import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { useQuery } from "react-apollo-hooks";
import SEARCH_RESULT from "./query";

const SearchResult = ({
  match: {
    params: { name }
  }
}) => {
  console.log(name);
  const { data, loading, error } = useQuery(SEARCH_RESULT, {
    variables: {
      contentsName: name
    }
  });
  console.log(data);
  return <BackgroundView CenterSection={CenterSection} contentsName={name} />;
};

export default SearchResult;
