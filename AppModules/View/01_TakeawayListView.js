import React, { Component } from "react";
import { Text, View } from "react-native";
import SearchBar from "../Search/SearchBar";
import {APICall} from "../Network/ApiCall";
import SearchList from "../SearchList";

class TakeawayListView extends Component {
  componentDidMount(): void {
    APICall.takeAwayList()
  }

  render() {
    return(
        <View>
          <SearchBar />

        </View>
    )

  }
}

export default TakeawayListView;
