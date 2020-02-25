import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    FlatList,
    View, Button
} from 'react-native';

import CheckBox from 'react-native-checkbox-heaven'
import {checkBoxColor, primaryColor} from "../Modules/Utils/InspectorConstants";
import {TakeAwayDetailsStyle} from "../Styles/TakeAwayDetailsStyles";
import {Location} from "../Modules/LocationCheck/LocationCheck";

 class CheckList extends Component {
     constructor(props){
         super(props);
         this.state = {
             checked:[],
             data : [
                 {
                     "name": "Android POS with Integrated Printer",
                 },
                 {
                     "name": "Caller ID Modem",
                 },
                 {
                     "name": "PDQ thermal rolls",
                 },
                 {
                     "name": "Thermal receipt rolls",
                 },
                 {
                     "name": "Digital board",
                 }
             ]}
     }
     handleChange = (index) => {
         let checked = [...this.state.checked];
         checked[index] = !checked[index];
         this.setState({ checked });
     }

    render() {
        let { data, checked } = this.state;
        return (

            <View style={styles.container}>
            <FlatList
                data={data}
                extraData={this.state}
                renderItem={({ item, index }) =>
                    <CheckBox
                        style={styles.checkbox}
                        center
                        label={item.name}
                        labelStyle={styles.labelStyle}
                        iconSize={28}
                        iconName='faEdge'
                        checkedColor={primaryColor}
                        uncheckedColor={checkBoxColor}
                        onChange={() => this.handleChange(index)}
                        checked={checked[index]} />
                }
            />
                <View style={TakeAwayDetailsStyle.TakeAwayDetailsButtonStyle}>
                    <Button color={primaryColor} title="Finish Inspection" onPress={() => this.props.navigation.navigate("TakeawayList")}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
       // alignItems: 'center',
       // backgroundColor: '#F5FCFF',
        margin:30,
        padding:10

    },
    labelStyle: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f4f4f',

    },
    checkbox:{
        marginBottom:10,

    }
});

export default CheckList;