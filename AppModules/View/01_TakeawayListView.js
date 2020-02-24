import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import SearchBar from "../Modules/Search/SearchBar";




class TakeawayListView extends Component {


  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <SearchBar nav={this.props.navigation}/>

        </View>
      </TouchableWithoutFeedback>

    )

  }
}

export default TakeawayListView;
