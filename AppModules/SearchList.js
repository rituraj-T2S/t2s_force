import React ,{Component}from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text,ScrollView,TouchableOpacity } from 'react-native';
import {connect } from 'react-redux';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

function Item(props) {
    return (
        <View style={styles.item}>
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
                                <TouchableOpacity>
                                    <Item style={styles.itemContainer}>

                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text>City:{item.city}</Text>
                                        <Text>Town:{item.town}</Text>
                                        <Text>Postcode:{item.postcode}</Text>
                                    </Item>
                                </TouchableOpacity>


                            </View>
                        }}
                        keyExtractor={item => item.id+''}
                    />



        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    itemContainer: {
        flex:1,
        borderRadius: 12,
        borderWidth: 4,
      margin:10,
        borderColor: '#177614'
    },
    title: {
        fontSize: 25,
    },
});
const mapStateToProps =(state)=>({
    Response:state.takeAway.response
})

export default  SearchList;