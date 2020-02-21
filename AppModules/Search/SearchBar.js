import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {connect} from 'react-redux'
import {APIFailureAction ,APISuccessAction, APIRequestAction} from '../Redux/TakeawayListActions/TakeawayListActions'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postCode: ''
    }
  }


  fetchResponse = () => {
    this.props.APIRequestAction(this.state.postCode)
  }

  render() {
    return (
        <View style={styles.backgroundStyle}>
          <Icon name="search" style={styles.iconStyle}/>
          <TextInput
              style={styles.inputStyle}
              placeholder="Search"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.postCode}
              onChangeText={(newValue) => this.setState({postCode: newValue})}
          />
          <Text>{this.state.postCode}</Text>
          <View>
            <Button title="press"
                    onPress={this.fetchResponse}
            />
          </View>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});
const mapStateToProps= (state)=>{
  return{
    postCode: state.takeAway.postCode,
    response : state.takeAway.response
  }}
const mapDispatchToProps={
  APISuccessAction,
  APIRequestAction,
  APIFailureAction
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
