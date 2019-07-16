import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import configureStroe from "./store/configureStroe";

const store = configureStroe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
