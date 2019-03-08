import React from "react";
import CenterSection from "./CenterSection";
import BackgroundView from "Components/BackgroundView";
import { useQuery } from "react-apollo-hooks";
import { VIEWER_QUERY, HISTORY_QUERY } from "./query";

let QUERY;
let variables;
const NOT_EXIST_PAGE = "";

const Viewer = ({
  match: {
    params: { contentName },
    params
  }
}) => {
  const IS_HISTORY_PAGE = params.ver;

  if (IS_HISTORY_PAGE) {
    QUERY = HISTORY_QUERY;
    variables = { contentName, makingTime: params.ver };
  } else {
    QUERY = VIEWER_QUERY;
    variables = { contentName };
  }

  const { data, loading } = useQuery(QUERY, {
    variables
  });

  if (loading) return "loading";
  else if (IS_HISTORY_PAGE)
    return (
      <BackgroundView CenterSection={CenterSection} data={data.getHistory} />
    );
  else if (data.getContent.makingTime[0] === NOT_EXIST_PAGE) {
    alert("존재하지 않는 페이지 입니다");
    return (window.location.href = `http://localhost:3000/write/${contentName}`);
  } else
    return (
      <BackgroundView CenterSection={CenterSection} data={data.getContent} />
    );
};

export default Viewer;
