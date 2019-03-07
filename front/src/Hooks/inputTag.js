import { useState } from "react";

const useInputTag = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};

export default useInputTag;
