import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, StyleSheet, View, TextInput, Button, ToastAndroid,TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FormComponent from '../components/picker';
const SignupScreen = ({navigation}) => {
    return(
      <View style={{flex:1}}> 
      <ImageBackground source={require('../images/bac.jpg')} resizeMode="cover" style={styles.image}></ImageBackground>
        <View style = {styles.container}>
        <Text style={styles.inst}>Register yourself</Text>
        <TextInput style = {styles.inputFields}
          placeholder="Name" />
        <TextInput style = {styles.inputFields}
          placeholder="Email address" />
        <TextInput style = {styles.inputFields}
          secureTextEntry={true}
          placeholder="Password"/>
        <TextInput style = {styles.inputFields}
          secureTextEntry={true}
          placeholder="Repeat Password"/>
        <FormComponent/>
        <TouchableOpacity style={styles.TouchableOpacityStyling} onPress={()=>{
            navigation.navigate("Login")
        }}>
        <Text style = {{fontSize:18, fontWeight:'bold',color:'#CEEDDB'}}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10,color:'#009688',}}
        onPress={() => navigation.navigate("Login")}>Already registered? Login.</Text>

    </View>
    </View>
    );
   
}
export default SignupScreen;
const styles = StyleSheet.create({
    inst:{
        fontSize: 30,
        fontWeight:'bold',
        color:'#009688',
    },
    image:{
      flex: 1,
      justifyContent: 'center',
    },
    container:{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center'
    },
    inputFields:{
      borderColor: "black",
      width: 250,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginTop: 15,
    },
    TouchableOpacityStyling:{
        elevation: 10,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
    }
  });