import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  LoginView,
  MainView,
  UserInfoView
} from "./pages/index";
import ProgramInfoContainer from './container/ProgramInfoContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/login" component={LoginView} />
        <Route path="/main" component={MainView} />
        <Route path="/programinfo" component={ProgramInfoContainer} />
        <Route path="/userinfo" component={UserInfoView} />
      </div>
    </BrowserRouter>
  );
};

export default App;
