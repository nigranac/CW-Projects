import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home"
import Details from "./pages/Details"
import Other from "./pages/Other"




const Stack = createStackNavigator();

const Router= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled:true}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Other" component={Other} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router