import React, { useState,use } from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ToastAndroid, ScrollView} from 'react-native';
import ProfileScreen from './Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabBar from '../navigations/bottomTab';
import { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
const DetailsScreen = () => {
    const [Qty, setQty] = useState(1)
    useEffect(()=>{
        ToastAndroid.show(`Quantity has been updated to ${Qty}.`, ToastAndroid.SHORT)
    },[Qty])
    return(
        <View style={{flex: 1}}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={{flex:1,}}></ImageBackground>
        <View style={styles.layout}>
        <ScrollView contentContainerStyle={{flexGrow: 1, width:'100%',}}>
        <View style={{flex:0, flexDirection:'row', backgroundColor:'#009688', height:50, paddingHorizontal:10,alignSelf:"auto", alignItems:"center", justifyContent:"space-between"}}>
        <Icon name="arrow-back" size={30} style={{color:"#CEEDDB"}}/>
        <Text style={{fontSize:20, fontWeight:'bold',color:'#CEEDDB',}}>Buy Books</Text>
        <Icon name="share" size={30} style={{color:"#CEEDDB"}}/>
        </View>
        <View style = {styles.bookCover}>
            <Image id="cover" source={require('../images/EducationBooks/book1.jpg')} style={{borderRadius:15,height: 200, width: 150}}/>
            <View style={{flex:1, paddingHorizontal:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Computer Science</Text>
                <Text style={{fontSize:10, color:'#009688', marginTop:10}}>By Dave Duddel</Text>
                <View style={{flex:0, flexDirection:'row', marginTop:10}}>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20} style={{color:'#FFD700'}}></Icon>
                    <Icon name="star" size={20}></Icon>
                </View>
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>$30.00</Text>
                <TouchableOpacity style={styles.btnStyle}>
                <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB',textAlign:'center'}}>Save</Text>
                </TouchableOpacity>
        </View>
        </View>
        <View style={styles.desc}>
        <Text style={styles.inst}>
            Details
        </Text>
        <View style={{flex:2 ,backgroundColor:'white', borderRadius:30, flexDirection:"row",padding:15, justifyContent:'space-between'}}>
        <View style={{padding:10, alignItems:"flex-start", flex:0, justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:'#009688', fontSize:15, fontWeight:"bold",}}>
            Ratings
        </Text>
        <View style={{flex:0, flexDirection:'row',}}>
            <Icon name="star" color='#FFD700' size={20}></Icon>
            <Text style={{color:'#009688'}}>4.1</Text>
        </View>
        </View>

        <View style={{ padding:15, justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:'#009688', fontSize:15, fontWeight:"bold",}}>
            Number of pages
        </Text>
        <Text style={{color:'#009688'}}>768</Text>
        </View>

        <View style={{justifyContent:"center", alignItems:"center", padding:15}}>
        <Text style={{color:'#009688', fontSize:15, fontWeight:"bold",}}>
            Language
        </Text>
        <Text style={{color:'#009688'}}>English</Text>
        </View>
        </View>

        <View style={{flex:2,justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'#009688'}}>This book covers the crucial aspects of programming, starting from the basics till the design and optimization of algorithms. The book also clears the theoretical concepts.</Text>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:"baseline",}}>
        {/* quantity button */}
        <Text style={{color:'#009688', fontWeight:'bold', fontSize:25}}>QTY</Text>
        <View style={styles.quantity}>
        <TouchableOpacity style={{minWidth:40, alignItems:"center"}}
         onPress={()=>{
            if(Qty>1){
                setQty(prevQty => prevQty-1)
            }
            else{
                ToastAndroid.show('Quantity cannot be zero', ToastAndroid.SHORT)
            }
            
        }}>
        <Text style={{color:"#CEEDDB", fontSize:25, fontWeight:"bold"}}>-</Text>
        </TouchableOpacity>
        <Text style = {{fontSize:25, fontWeight:'bold',color:'#CEEDDB',textAlign:'center',}}>{Qty}</Text>
        <TouchableOpacity style={{minWidth:40, alignItems:"center"}} onPress={()=>{
            setQty(prevQty => prevQty+1)
        }}>
        <Text style={{color:"#CEEDDB", fontSize:28, fontWeight:"bold", alignItems:"center",}}>+</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnStyle}>
            <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB',}}>Add to cart</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    quantity:{
        flex:2,
        backgroundColor:'#009688',
        elevation:10,
        borderRadius: 10,
        maxWidth:120,
        height:45,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"baseline",
    },
    desc:{
        backgroundColor:'#CEEDDB',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        flex:4,
        padding:20,
    },
    inst:{
        fontSize: 25,
        marginTop: 10,
        marginBottom: 8,
        fontWeight:'bold',
        color:'#009688',
        paddingHorizontal:30,
    },
    btnStyle:{
        elevation: 10,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10,
        minWidth:120,
        justifyContent:"center",
        alignItems:"center"
    },
    bookCover:{
        flex:0,
        flexDirection:'row',
        padding:30,
    },
    layout:{
        flex:1,
        position:'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width:'100%',
        height:'100%',
        zIndex:1,
    },
    loginForm:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent: 'center',
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1,
        position: 'absolute',
    },

})
export default DetailsScreen;

