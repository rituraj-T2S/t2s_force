import React, { Component } from "react";

import TakeawayListView from "../View/01_TakeawayListView";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TakeawayDetails from "../View/TakeawayDetails";
import QRScan from "../View/QRScan";

export class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    TakeawayList: TakeawayListView,
    TakeAwayDetails: TakeawayDetails,
      QRScan:QRScan
  },
  {
    initialRouteName: "TakeawayList"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
