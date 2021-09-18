import context_api from "./Context_api";
import React, { useState } from "react";
const Signp = (props) => {
  const [state, setstate] = useState("initialState");

  return (
    <context_api.Provider value={state}>{props.childern}</context_api.Provider>
  );
};
