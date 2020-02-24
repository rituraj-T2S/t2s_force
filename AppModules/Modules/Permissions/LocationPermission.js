
import { PermissionsAndroid } from "react-native";
import { locationPermissionAlert } from "../Alert/LocationPermissionAlert";


export async function requestLocationPermission(nav,data,id) {
    console.log(PermissionsAndroid.RESULTS);

    try {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            nav.navigate("TakeAwayDetails",{data:data,id:id})
        } else if (permission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            locationPermissionAlert();
            console.log("Permission never ask again");
        } else if (permission === PermissionsAndroid.RESULTS.DENIED) {
            console.log("Permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
}
