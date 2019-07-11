import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  LoginView,
  MainView,
  ProgramInfoView,
  UserInfoView
} from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/login" component={LoginView} />
        <Route path="/main" component={MainView} />
        <Route path="/programinfo" component={ProgramInfoView} />
        <Route path="/userinfo" component={UserInfoView} />
      </div>
    </BrowserRouter>
  );
};

export default App;
