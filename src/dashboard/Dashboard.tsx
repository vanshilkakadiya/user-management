import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Adduser from '../screens/Adduser';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Adduser" component={Adduser} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}