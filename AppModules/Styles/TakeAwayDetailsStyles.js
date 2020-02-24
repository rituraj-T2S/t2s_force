import {StyleSheet} from 'react-native';
import {primaryColor} from "../Modules/Utils/InspectorConstants";


export const TakeAwayDetailsStyle= StyleSheet.create({
    ScrollViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TakeAwayNameStyle:{
        marginTop:15,
        marginBottom:7,
        width: "70%",
        height: 45,
        borderRadius: 12,
        borderWidth: 4,
        borderColor:primaryColor
    },
    TakeAwayNameTextStyle:{
        textAlign: 'center',
        color: primaryColor,
        fontWeight:'bold',
        fontSize:20,
    },
    TakeAwayAddressTextStyle:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    TakeAwayDetailsImageStyle:{
        width: 300,
        height: 300,
        backgroundColor:primaryColor,
        borderRadius: 10,
        borderWidth: 2,
        borderColor:'black',
        marginVertical:5
    },
    TakeAwayDetailsImageStyleContainer:{
      marginVertical: 5
    },
    TakeAwayDetailsDescriptionStyle:{
       fontSize: 14,
        fontWeight:'bold',
        textAlign:'center'
    } ,
    TakeAwayDetailsDescriptionContainer:{
        width:'90%',
        height:100,
        borderRadius:10,
        borderWidth:2,
        paddingVertical: 10,
        borderColor : primaryColor
    },
    TakeAwayDetailsButtonStyle:{
        marginVertical:10,
        color: primaryColor,
        borderRadius:12,

    }
});
