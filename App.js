/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StackNavigatorScreens from './src/navigations/stackNavigator';
import TabBar from './src/navigations/bottomTab';
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function App() {
  return (
    <NavigationContainer>
    <StackNavigatorScreens/>
    </NavigationContainer>
  );
}
export default App;
