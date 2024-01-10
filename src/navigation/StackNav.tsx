import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../auth/Auth';
import Dashboard from '../dashboard/Dashboard';
import { firebase } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const StackNav=()=> {
  const user = firebase.auth().currentUser;
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={user?"Dashboard":"Auth"}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;