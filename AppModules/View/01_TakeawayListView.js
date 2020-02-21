import React, { Component } from "react";
import { Text, View } from "react-native";
import SearchBar from "../Search/SearchBar";
import {APIcall} from "../Network/ApiCall";

class TakeawayListView extends Component {
  componentDidMount(): void {
    APIcall.takeAwayList()
  }

  render() {
    return <SearchBar />;
  }
}

export default TakeawayListView;
