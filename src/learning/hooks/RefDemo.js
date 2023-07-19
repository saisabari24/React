import React, { useState, useEffect, useRef } from "react";

const RefDemo = () => {
  const [data, setData] = useState("boa yt channel");
  const count = useRef(0);
  const txtRef = useRef();

  const focusInput = () => {
    txtRef.current.focus();
    alert("in input " + txtRef.current.value);
  };
  const handleChange = (event) => {
    setData(event.target.value);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <h3>Title for YT vid</h3>
      <input
        type="text"
        ref={txtRef}
        value={data}
        onChange={(event) => handleChange(event)}
      />
      <h4>render count: {count.current}</h4>
      <button className="btn btn-primary" onClick={focusInput}>
        Focus on the textbox input
      </button>
    </div>
  );
};

export default RefDemo;
