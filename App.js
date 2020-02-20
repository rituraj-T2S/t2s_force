import React, { Component } from "react";
import {APIcall} from "./AppModule/Network/APIcall";

export default class App extends Component {
  render() {
    APIcall();
  }
}
