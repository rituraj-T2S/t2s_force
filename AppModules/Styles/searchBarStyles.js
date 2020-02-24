import { StyleSheet } from "react-native";

export const searchBarStyles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 25,
        marginHorizontal: 15,
        flexDirection: "row",
        borderColor:'black',
        borderWidth:4,
        marginVertical:20,
        top:10,

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