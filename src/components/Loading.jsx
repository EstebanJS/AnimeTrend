import React from "react";
import Logo from "@images/Logo.png";

import "@styles/Loading.sass";

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader__circle"></div>
    </div>
  );
};

export default Loading;
