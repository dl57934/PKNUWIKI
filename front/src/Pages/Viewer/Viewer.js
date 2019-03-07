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
  console.log(data);

  if (loading) return "loading";
  else if (data.getContent.historyLength === 0) {
    alert("존재하지 않는 페이지 입니다");
    return (window.location.href = `http://localhost:3000/write/${contentName}`);
  } else return <BackgroundView CenterSection={CenterSection} data={data} />;
};

export default Viewer;
