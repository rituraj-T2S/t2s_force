import React ,{Component}from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,ScrollView,TouchableOpacity } from 'react-native';
import {connect } from 'react-redux';
import {searchListStyles} from "../../Styles/searchListStyles";



function Item(props) {
    return (
        <View style={searchListStyles.item}>
            {props.children}
        </View>
    );
}

class SearchList extends Component {
    render() {

        return (


                    <FlatList
                        data={this.props.data}
                        renderItem={({ item }) =>  {
                            return  <View>
                                <TouchableOpacity style={searchListStyles.itemContainer}>
                                    <Item>

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