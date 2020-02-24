import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import SearchBar from "../Modules/Search/SearchBar";

import { APICall } from "../Modules/Network/ApiCall";
import SearchList from "../Modules/SearchList/SearchList";


class TakeawayListView extends Component {
  componentDidMount() {
    APICall.takeAwayList();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <SearchBar />

        </View>
      </TouchableWithoutFeedback>

    )

  }
}

export default TakeawayListView;