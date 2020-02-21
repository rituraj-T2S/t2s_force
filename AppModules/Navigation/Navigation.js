import React, { Component } from "react";

import TakeawayListView from "../View/01_TakeawayListView";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    TakeawayList: TakeawayListView
  },
  {
    initialRouteName: "TakeawayList"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
