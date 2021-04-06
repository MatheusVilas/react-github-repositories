import React from "react";
import ReactDOM from "react-dom";
import Apollo from "./main/factories/apollo";
import Router from "./main/routes/router";

import "./presentation/styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Apollo>
      <Router />
    </Apollo>
  </React.StrictMode>,
  document.getElementById("root")
);
