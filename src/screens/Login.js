import React from 'react'
import {View, Text, Image, ScrollView,TouchableOpacity, TextInput, ImageBackground} from 'react-native'
import  {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import FormComponent from '../components/picker';
const LoginScreen = ({navigation}) => {
    return(
        <View style = {styles.background}>
        <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={{flex:1}}></ImageBackground>
        <View style = {styles.loginForm}>
        <Text style={styles.inst}>Enter credentials</Text>
        <TextInput style = {styles.inputFields}
          placeholder="Email" />
        <TextInput style = {styles.inputFields}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.TouchableOpacityStyling} onPress={()=>{
            navigation.navigate("Profile")
        }}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10,color:'#009688',}}
        onPress={()=>{
            navigation.navigate("Signup")
        }}>New here? Register now.
        </Text>
        </View>
        </View>    
    );
}
const styles = StyleSheet.create({
    background:{
       flex:1,
    },
    TouchableOpacityStyling:{
        elevation: 10,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
    },
    inst:{
        fontSize: 30,
        marginTop: 10,
        fontWeight:'bold',
        color:'#009688',
    },
    header:{
       textAlign:'center',
        fontSize: 25,
        color: '#544E61',
        flex: 1,
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
    inputFields:{
        borderColor: "black",
        width: 250,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
  },
});
export default LoginScreen;