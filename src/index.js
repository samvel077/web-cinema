import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Show  from "./components/Show";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/show" component={App} exact />
        <Route path="/show/:id" component={Show} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
