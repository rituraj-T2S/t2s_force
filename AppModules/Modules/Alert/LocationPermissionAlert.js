import { Alert } from "react-native";
import AndroidOpenSettings from "react-native-android-open-settings";
export const locationAlert = distance => {
    Alert.alert("Go to takeaway", `You are ${distance} meters away`, [
        {
            text: "Cancel",
            style: "cancel"
        },
        { text: "OK" }
    ]);
};

export const locationPermissionAlert = () => {
    Alert.alert("", "Go to Settings ", [
        {
            text: "Settings",
            onPress: () => AndroidOpenSettings.appDetailsSettings()
        },
        { text: "OK" }
    ]);
};
