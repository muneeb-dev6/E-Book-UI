import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import ProfileScreen from './Profile';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabBar from '../navigations/bottomTab';
import { NavigationContainer } from '@react-navigation/native';
const DetailsScreen = () => {
    return(
        <View style={{flex: 1}}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={{flex:1,}}></ImageBackground>
        <View style={styles.layout}>
        <Text style={styles.inst}>
            Top E-book Reading
        </Text>
        <View style = {styles.bookCover}>
            <Image source={require('../images/EducationBooks/book1.jpg')} style={{height: 200, width: 150}}/>
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
                <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Details</Text>
                </TouchableOpacity>
            </View>
        </View>

        
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    inst:{
        fontSize: 25,
        marginTop: 10,
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
        maxWidth:80,
    },
    bookCover:{
        flex:1,
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

