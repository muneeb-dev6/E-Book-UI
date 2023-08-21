import React from 'react'
import {View,Button ,Text ,TextInput, StyleSheet, Image ,ImageBackground, ScrollView, TouchableOpacity, FlatList, ToastAndroid} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import ImageSlider from '../components/imageSlider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabBar from '../navigations/bottomTab';
const ProfileScreen = ({navigation}) => {
    return(
        <View style={{flex:5}}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={{flex:5}}></ImageBackground>
        <View style={ styles.container}>
        <View style={{flex:0, flexDirection:'row', backgroundColor:'#009688', height:50, paddingHorizontal:10, alignSelf:"auto", alignItems:"center", justifyContent:"space-between"}}>
        <Icon name="menu" size={30} style={{color:"#CEEDDB"}}/>
        <Text style={{fontSize:20, fontWeight:'bold',color:'#CEEDDB'}}>Explore Books</Text>
        <Image source={require('../images/icon.png')} style={{height:30, width:30, borderRadius:15}}/>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1, width:'100%'}}>
        <View style={{flex:1, paddingHorizontal:20, marginTop:20}}>
        <View style={styles.border}>
        <TextInput  placeholder='Search for books...'style={{flex:1,}}></TextInput>
        <Icon name="search" size={30} style={{paddingVertical:10, color:'#009688'}}></Icon>
        </View>
        </View>
        <Text style={styles.inst}>Categories</Text>
        <ScrollView style={styles.categories} showsHorizontalScrollIndicator={false} horizontal>
        <TouchableOpacity id="edu" style ={styles.TouchableOpacityStyling}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Education</Text>
        </TouchableOpacity>
        <TouchableOpacity id="mag" style ={styles.TouchableOpacityStyling}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Magazines</Text>
        </TouchableOpacity>
        <TouchableOpacity id="nov" style ={styles.TouchableOpacityStyling}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Novels</Text>
        </TouchableOpacity>
        <TouchableOpacity id="his" style ={styles.TouchableOpacityStyling}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity id="rel" style ={styles.TouchableOpacityStyling} >
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Religion</Text>
        </TouchableOpacity>
        <TouchableOpacity id="rec" style ={styles.TouchableOpacityStyling} >
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Recipies</Text>
        </TouchableOpacity>
         <TouchableOpacity id="rec" style ={styles.TouchableOpacityStyling} >
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Fantasy</Text>
        </TouchableOpacity>
        <TouchableOpacity id="rec" style ={styles.TouchableOpacityStyling} >
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Sci-Fi</Text>
        </TouchableOpacity>
        </ScrollView>
        <Text style={styles.inst}>Trending books</Text>
        <View style={styles.displayBooks}>
        <ImageSlider/>
        </View>
        <View style={styles.recommended}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:"baseline"}}>
            <Text style={styles.inst}>Recommended for you</Text>
        </View>
        <View style={{flex:4, backgroundColor:'white', borderRadius:20, margin:10, alignItems:'baseline', padding:20}}>
            <View style={{flex:1, flexDirection:'row'}}>
                <Image source={require('../images/HistoryBooks/book2.jpg')} style={{height:140, width:110, borderRadius:10, }}/>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Pakistan - The Formative phase</Text>
                    <Text style={{fontSize:10, color:'#009688', marginTop:10}}>By Khalid Bin Saeed</Text>
                    <View style={{flex:0, flexDirection:'row', marginTop:10}}>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20}></Icon>
                    <Icon name="star" size={20}></Icon></View>
                </View>
            </View>
        </View>
        </View>
        </ScrollView>
        </View>
        <NavigationContainer independent={true}></NavigationContainer>
        </View>
    );
}
export default ProfileScreen;;
const styles = StyleSheet.create({
    recommended:{
        backgroundColor:'#CEEDDB',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        flex:3,
        padding:10,
        marginTop:20,
        justifyContent:"space-between",
    },
    inputFields:{
        borderColor: "black",
        maxWidth:200,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
    },
    TouchableOpacityStyling:{
        backgroundColor: "#009688",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        marginRight: 3,
    },
    displayBooks:{
        flexDirection:'row',
        flex:2,
        marginLeft: 10,
        marginRight:5,
        marginTop:10
    },
    categories:{
        flex:5,
        flexDirection:'row',
        marginStart:10,
        marginEnd: 5,
        maxHeight: 60,
        marginLeft:20,
    },
    bookCovers:{
        height: 130,
        width: 90,
        marginRight: 25,
    },
    inst:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#009688',
        marginLeft: 20,
        marginTop:20
    },
    container:{
        flex: 3,
        height:'100%',
        width: '100%',
        position:'absolute',
        zIndex:1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    border:{
        borderWidth: 3,
        marginTop: 10,
        borderColor: '#009688',
        backgroundColor:'white',
        borderRadius: 20,
        flex:1,
        margintStart:20,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    itemStyles:{
        backgroundColor: '#CEEDDB'
    }
})