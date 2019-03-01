import React, { useState } from "react";

const useMoveUrlByButton = ({ url }) => {
  const moveUrl = useState(url, setUrl);
  const onClick = () => {
    return window.location(moveUrl);
  };

  return { onClick };
};

export default useMoveUrlByButton;
