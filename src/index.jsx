import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./helpers/initFA";
import Main from "./main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
    <Main>
      <App />
    </Main>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
