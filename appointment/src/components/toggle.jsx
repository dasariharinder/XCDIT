import React, { useState } from "react";

const LogicalNot = (prop) => {
  const [toggle, setToggle] = useState(prop.toggle);
  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        class={toggle ? "toggleYes" : "toggleNo"}
      >
        {toggle ? "Yes" : "No"}
      </button>
    </>
  );
};
export default LogicalNot;
