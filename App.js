import React, { Component } from "react";

import { Navigation } from "./AppModules/Navigation/Navigation";
import { Provider } from 'react-redux';
import store from "./AppModules/Redux/Store/Store";
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Navigation/>
        </Provider>
  )
  }
}
