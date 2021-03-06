
import {StyleSheet} from "react-native";
import {primaryColor} from "../Modules/Utils/InspectorConstants";

export const searchListStyles = StyleSheet.create({
    container: {
        flex: 1,


    },
    address: {
        marginVertical:5,
        fontSize: 20
    },
    itemContainer: {
        flex:1,
        borderColor:  primaryColor,
        borderWidth:4,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12

    },
    title: {
        fontSize: 24,
    },
});
