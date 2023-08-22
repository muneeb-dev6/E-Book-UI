import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,Button ,Text ,TextInput, StyleSheet, Image ,ImageBackground, ScrollView, TouchableOpacity, FlatList, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const BillScreen = ({navigation}) => {
    return(
        <View style={{flex:1}}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={{flex:1,}}/>
        <View style={styles.layout}>
        <ScrollView contentContainerStyle={{flexGrow:1, width:'100%'}}>
        <View style={{flex:0, flexDirection:'row', backgroundColor:'#009688', height:50, paddingHorizontal:10,alignSelf:"auto", alignItems:"center"}}>
        <TouchableOpacity onPress={()=>navigation.navigate("E-Book Store")}>
        <Icon name="arrow-back" size={30} style={{color:"#CEEDDB"}}/>
        </TouchableOpacity>
        <Text style={{fontSize:20, fontWeight:'bold',color:'#CEEDDB',padding:10}}>Billing</Text>
        </View>
        <View style={styles.receipt}>
        <View style={styles.cartItem}>
        <Text style={styles.label}>Serial No.</Text>
        <Text style={styles.label}>Book name</Text>
        <Text style={styles.label}>Quantity</Text>
        <Text style={styles.label}>Price per item</Text>
        <Text style={styles.label}>Total Price</Text>
        </View>
        <View style={styles.cartItem}>
        <Text style={styles.enteries}>1</Text>
        <Text style={styles.enteries}>Computer Science</Text>
        <Text style={styles.enteries}>2</Text>
        <Text style={styles.enteries}>$30.00</Text>
        <Text style={styles.enteries}>$60.00</Text>
        </View>
        </View>
        </ScrollView>
        </View>
        </View>
    );
}
export default BillScreen;
const styles = StyleSheet.create({
    layout:{
        flex:1,
        position:'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width:'100%',
        height:'100%',
        zIndex:1,
    },
    cartItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        padding:10
    },
    label:{
        fontSize: 15,
        fontWeight:'bold',
        color:'#009688',
        marginLeft: 20,
        marginTop:20
    },
    enteries:{
        padding:10,
        fontWeight:"bold"
    }
})