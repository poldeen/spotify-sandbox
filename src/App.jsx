import is from "is_js";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAppContext } from "./main";
import SandboxRoutes from "./routes";

const App = () => {
  const HTMLClassList = document.getElementsByTagName("html")[0].classList;
  const {
    config: { navbarPosition },
  } = useAppContext();
  //const { user, role } = useContext(UserContext);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add("windows");
    }
    if (is.chrome()) {
      HTMLClassList.add("chrome");
    }
    if (is.firefox()) {
      HTMLClassList.add("firefox");
    }
    if (is.safari()) {
      HTMLClassList.add("safari");
    }
  }, [HTMLClassList]);

  useEffect(() => {
    if (navbarPosition === "double-top") {
      HTMLClassList.add("double-top-nav-layout");
    }
    return () => HTMLClassList.remove("double-top-nav-layout");
  }, [navbarPosition]);

  /* const logOut = () => {
    AuthService.logout();
  }; 


  */

  return (
    <Router basename="/">
      {/* <UserContext.Provider value={{ user, role }}> */}
      <SandboxRoutes />
    </Router>
  );
};

export default App;
