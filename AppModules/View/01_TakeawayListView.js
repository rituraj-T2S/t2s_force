import React, { Component } from "react";
import { Text, View } from "react-native";
import SearchBar from "../Search/SearchBar";
import {APICall} from "../Network/ApiCall";

class TakeawayListView extends Component {
  componentDidMount(): void {
    APICall.takeAwayList()
  }

  render() {
    return <SearchBar />;
  }
}

export default TakeawayListView;
