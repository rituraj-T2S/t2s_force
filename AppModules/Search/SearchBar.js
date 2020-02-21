import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.state={
        postCode: ''
      }
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <Icon name="search" style={styles.iconStyle} />
        <TextInput
          style={styles.inputStyle}
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.postCode}
          onChangeText={(newValue)=>this.setState({postCode: newValue})}
        />
        <Text>{this.state.postCode}</Text>
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
export default SearchBar;
