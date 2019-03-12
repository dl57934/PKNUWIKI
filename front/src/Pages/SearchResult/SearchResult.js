import React from "react";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";
import { useQuery } from "react-apollo-hooks";
import SEARCH_RESULT from "./query";
import styled from "styled-components";

const SearchResult = ({
  match: {
    params: { name }
  }
}) => {
  const { data, loading } = useQuery(SEARCH_RESULT, {
    variables: {
      contentsName: name
    }
  });
  data["name"] = name;
  if (loading) return <Loading>loading</Loading>;
  else return <BackgroundView CenterSection={CenterSection} data={data} />;
};

export default SearchResult;

const Loading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
