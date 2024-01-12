import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../../uiScreens/auth/Auth';
import Dashboard from '../drawerBottomNav/Dashboard';
import { firebase } from '@react-native-firebase/auth';
import { route } from '../../../assets/constant/route';

const Stack = createNativeStackNavigator();

const StackNav=()=> {
  const user = firebase.auth().currentUser;
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={user?route.dashboard:route.auth}>
        <Stack.Screen name={route.auth} component={Auth} />
        <Stack.Screen name={route.dashboard} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;