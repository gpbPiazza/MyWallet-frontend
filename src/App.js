import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UpDateCash from "./pages/UpdateCash";
import ResetCSS from "./styles/global/ResetCSS";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global/GlobalStyle";
import { UserProvider } from "./context/UserContext";

const App = () => (
  <UserProvider>
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route
          exact
          path="/upDateCash/:typeTransaction"
          component={UpDateCash}
        />
      </Switch>
    </Router>
  </UserProvider>
);

export default App;
