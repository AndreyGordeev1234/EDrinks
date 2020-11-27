import { useState } from "react";

const useInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);

  const onChange = event => {
    setValue(event.target.value);
  }

  return {
    value,
    onChange
  }
}

export default useInput;