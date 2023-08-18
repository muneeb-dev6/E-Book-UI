import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet, Text} from 'react-native';
import LoginScreen from "../screens/Login";
import ProfileScreen from "../screens/Profile";
import SignupScreen from "../screens/Signup";
import TabBar from "../navigations/bottomTab";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/details";
const Stack = createNativeStackNavigator()
const StackNavigatorScreens = () => {
    return (
      <Stack.Navigator >
      {/* <Stack.Screen
      options={styles.headerStyling}
      name="Login"
      component={LoginScreen}>
      </Stack.Screen> */}
      
      <Stack.Screen
        name="E-Book Store"
        options={{headerShown:false}}
        component={TabBar}>
      </Stack.Screen>

      {/* <Stack.Screen
      options={styles.headerStyling}
      name="Profile"
      component={ProfileScreen}>
      </Stack.Screen> */}
{/* 
      <Stack.Screen
      options={styles.headerStyling}
      name="Signup"
      component={SignupScreen}>
      </Stack.Screen>

      <Stack.Screen
      options={styles.headerStyling}
      name="Details"
      component={DetailsScreen}>
      </Stack.Screen> */}
      </Stack.Navigator>
    );
  }
const styles = StyleSheet.create({
    headerStyling:{
      headerTintColor:'#CEEDDB',
      headerStyle:{backgroundColor:'#009688'},
    }
  })
export default StackNavigatorScreens;