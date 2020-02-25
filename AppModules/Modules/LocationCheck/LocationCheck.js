import * as geolib from "geolib";
import Geolocation from "react-native-geolocation-service";

import React, { Component } from "react";
import { Alert } from "react-native";
import { locationAlert } from "../Alert/LocationPermissionAlert";
import {distanceValidation} from "../Utils/InspectorConstants";
import {requestCameraPermission} from "../Permissions/CameraPermission";


class LocationCheck extends Component {
    findCoordinates = (navigation,lat,lng) => {
        Geolocation.getCurrentPosition(
            position => {
                const getDistance = distance(position.coords,lat,lng);
                if (getDistance < distanceValidation) {
                    locationAlert(getDistance);
                } else {
                    requestCameraPermission(navigation);
                }
                console.log(
                    `You are , ${getDistance}, meters away from ${lat}, ${lng}`
                );
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };
    render() {
        return <></>;
    }
}

export const distance = (position,lat,lng) => {
    return geolib.getDistance(position, {
        latitude: lat,
        longitude: lng

    });
};
export default LocationCheck;
const Location = new LocationCheck();
export { Location };
