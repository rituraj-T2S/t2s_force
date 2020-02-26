import React, { Component } from "react";
import {
    Text,
    Button,
    Image,
    View,
    ScrollView
} from "react-native";

import {
    Location
} from "../Modules/LocationCheck/LocationCheck";
import {TakeAwayDetailsStyle} from "../Styles/TakeAwayDetailsStyles";
import {primaryColor} from "../Modules/Utils/InspectorConstants";

export default class StartInspection extends Component {


    render() {
        const data = this.props.navigation.getParam('data')
        const id = this.props.navigation.getParam('id')
        console.log("data=>",data)
        console.log("id=>",id)
        const filteredTakeaway = data.filter(data => data.id === id)
        const lat = filteredTakeaway[0].lat
        const lng = filteredTakeaway[0].lng

        console.log(filteredTakeaway[0].cuisines[1])
        // console.log( filteredTakeaway[0].cuisines[1].hasOwnProperty('image_url') )
        return (

            <>
                <ScrollView >
                    <View style={TakeAwayDetailsStyle.ScrollViewStyle}>
                    <View style={TakeAwayDetailsStyle.TakeAwayNameStyle}>
                        <Text numberOfLines={1} style={TakeAwayDetailsStyle.TakeAwayNameTextStyle}>{filteredTakeaway[0].name}</Text>
                    </View>
                    <View>
                        <Text style={TakeAwayDetailsStyle.TakeAwayAddressTextStyle}>{filteredTakeaway[0].street},{filteredTakeaway[0].city}</Text>
                    </View>
                   <View style={TakeAwayDetailsStyle.TakeAwayDetailsImageStyleContainer}>
                   { filteredTakeaway[0].cuisines.length > 0 ?  (<Image source={{ uri : filteredTakeaway[0].cuisines[1].image_url}}  style={TakeAwayDetailsStyle.TakeAwayDetailsImageStyle} />) : (<Text>Image not present</Text>)}
                   </View>
                    <View style={TakeAwayDetailsStyle.TakeAwayDetailsDescriptionContainer}>
                        <Text numberOfLines={5} style={TakeAwayDetailsStyle.TakeAwayDetailsDescriptionStyle}>{filteredTakeaway[0].description}</Text>
                    </View>
                    <View style={TakeAwayDetailsStyle.TakeAwayDetailsButtonStyle}>
                        <Button color={primaryColor} title="Start Inspection" onPress={() => Location.findCoordinates(this.props.navigation,lat,lng)}/>
                    </View>
                    </View>
                </ScrollView>

                </>
        )
    }

}

