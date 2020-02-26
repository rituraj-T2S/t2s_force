import React, { Component } from "react";
import {  View, TextInput, ScrollView, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { connect } from 'react-redux'
import { APIFailureAction, APISuccessAction, APIRequestAction } from '../Redux/TakeawayListActions/TakeawayListActions'
import SearchList from "../SearchList/SearchList";
import { searchBarStyles } from "../../Styles/searchBarStyles";
import { primaryColor } from "../Utils/InspectorConstants";

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postCode: '', //AA1 1AA, ST6 6DX
      loader:null
    }
  }

  isValidPostCode = (postcode) =>
  {
    const pattern = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/
    return pattern.test(postcode)
  }

  fetchResponse = () => {
    this.props.APIRequestAction(this.state.postCode)
  }

  render() {
    console.log("response+=>", this.props.response.data)
    return (
      <ScrollView>
        <View style={searchBarStyles.backgroundStyle}>
          <Icon name="search" style={searchBarStyles.iconStyle} />
          <TextInput
            style={searchBarStyles.inputStyle}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.postCode}
            onChangeText={(newValue) => this.setState({ postCode: newValue })}
            onSubmitEditing={()=>
              {
                if(this.isValidPostCode(this.state.postCode))
                {
                this.fetchResponse(),
                this.setState({loader:<ActivityIndicator color={primaryColor} size="large"/>})
                this.setState({postCode:''})
                }
                else
                {
                  alert("Enter valid post code")
                  this.setState({postCode:''})
                }
              }}
          />
        </View>
        <View>
          {this.props.response ? (<SearchList
              nav={this.props.nav}
              data={this.props.response.data} />):(this.state.loader)}
        </View>

      </ScrollView>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    postCode: state.takeAway.postCode,
    response: state.takeAway.response
  }
}
const mapDispatchToProps = {
  APIRequestAction
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
