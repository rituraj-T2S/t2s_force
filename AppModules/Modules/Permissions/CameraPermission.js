import { PermissionsAndroid } from "react-native";
import { CameraPermissionAlert } from "../Alert/CameraPermissionAlert";

export async function requestCameraPermission(navigation) {
    console.log(PermissionsAndroid.RESULTS);
    try {
        const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
        );

        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            navigation.navigate("QRCode");
            console.log("granted");
        } else if (permission === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            CameraPermissionAlert();
            console.log("Permission never ask again");
            // navigation.replace("Inspection");
        } else if (permission === PermissionsAndroid.RESULTS.DENIED) {
            console.log("Permission denied");
            // navigation.replace("Inspection");
        }
    } catch (err) {
        console.warn(err);
    }
}
