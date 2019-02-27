import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundView from "Components/BackgroundView";
import CenterSection from "./CenterSection";

const SearchResult = ({
  match: {
    params: { name }
  }
}) => {
  console.log(name);
  return <BackgroundView CenterSection={CenterSection} />;
};

export default SearchResult;
