import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from "./Screen/Home"

export default function App() {
  return (
    <NavigationContainer>
      <Tap.Navigator
        initialRouteName="Food"
        tabBarOptions={{
          activeTintColor: "#841548"
        }}
      />
      <Tap.Screen
        name="Home"
        component={HomeStack}
        options={{
          TabBarLable: "Home",
          TabBarIcon: ({color, size}) =>(
            <MaterialCommunityIcons
              name="name"
              color={color}
              size={size}
            />

          )
        }}
      />
    </NavigationContainer>
  );
}
function HomeStack(){
    return(
      <Stack.Navigator 
    intialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor:"#841548"},
        headerTinColor: "#fff",
        headerTitleStyle: {fontWeigth:"bold"}
    }}
    
  >
  <StackScreen
    name="Home"
    component={Home}
    options={{title: "Home Pages"}}
  />

  </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
