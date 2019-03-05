import React from "react";
import CenterSection from "./CenterSection";
import BackgroundView from "Components/BackgroundView";
import { useQuery } from "react-apollo-hooks";
import VIEWER_QUERY from "./query";

const Viewer = ({
  match: {
    params: { contentName }
  }
}) => {
  const { data, loading } = useQuery(VIEWER_QUERY, {
    variables: { contentName }
  });

  if (loading) return "loading";
  else return <BackgroundView CenterSection={CenterSection} data={data} />;
};

export default Viewer;
