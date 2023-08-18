import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { route } from '@react-navigation/native';
import ExploreScreen from '../screens/Explore';
import ProfileScreen from '../screens/Profile';
import FavoriteScreen from '../screens/Favorite';
import ReadingScreen from '../screens/Reading';
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon:({focused, size, color}) => {
        let iconName;
        if(route.name=="Home"){
          iconName = "explore";
          size = focused? size + 8 : size + 5;
        }
        else if(route.name=="Reading"){
          iconName = "menu-book";
          size = focused? size + 8 : size + 5;
        }
        else if(route.name=="Favorites"){
          iconName = "bookmark";
          size = focused? size + 8 : size + 5;
        }
        return <Icon name={iconName} size={size} color='#CEEDDB'/>
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle:{
        backgroundColor:'#009688',
      },
      headerStyle:{
        backgroundColor:'#009688',
        height: 60,
      }, 
    })}>
    <Tab.Screen
      name="Home"
      component={ProfileScreen}>
    </Tab.Screen>

    <Tab.Screen
      name="Reading"
      component={ReadingScreen}>
    </Tab.Screen>

    <Tab.Screen
      name="Favorites"
      component={FavoriteScreen}>
    </Tab.Screen>
    </Tab.Navigator>
    );
}
export default TabBar;