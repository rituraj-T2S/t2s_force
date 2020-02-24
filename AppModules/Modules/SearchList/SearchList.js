import React ,{Component}from 'react';
import {  View, FlatList, Text,TouchableOpacity } from 'react-native';

import {searchListStyles} from "../../Styles/searchListStyles";
import {requestLocationPermission} from "../Permissions/LocationPermission";




function Item(props) {
    return (
        <View style={searchListStyles.item}>
            {props.children}
        </View>
    );
}


class SearchList extends Component {
    onStart=(data,id)=>{
        requestLocationPermission(this.props.nav,data,id);
    }

    render() {

        return (


                    <FlatList
                        data={this.props.data}
                        renderItem={({ item }) =>  {
                            const id = item.id
                            return  <View>
                                <TouchableOpacity
                                    onPress={() => this.onStart(this.props.data,id)
                                    }
                                    style={searchListStyles.itemContainer}>
                                    <Item >

                                        <Text style={searchListStyles.title}>{item.name}</Text>
                                        <View style={searchListStyles.address}>
                                            <Text>City:{item.city}</Text>
                                            <Text>Town:{item.town}</Text>
                                            <Text>Postcode:{item.delivery_postcode}</Text>
                                        </View>

                                    </Item>
                                </TouchableOpacity>


                            </View>
                        }}
                        keyExtractor={item => item.id+''}
                    />



        );
    }

}



export default  SearchList;
