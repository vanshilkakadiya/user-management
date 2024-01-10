import * as React from 'react';
import {Provider} from 'react-redux';
import store from '../../redux/Store';
import {wp} from '../../../assets/helper/helper';
import Home from '../../uiScreens/screens/Home/Home';
import Profile from '../../uiScreens/screens/Profile/Profile';
import Adduser from '../../uiScreens/screens/Adduser/Adduser';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../../component/CustomDrawerContent';
import { route } from '../../../assets/constant/route';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={route.home} component={Home} />
      <Tab.Screen name={route.adduser} component={Adduser} />
      <Tab.Screen name={route.profile} component={Profile} />
    </Tab.Navigator>
  );
};

const Dashboard = () => {
  return (
    <Provider store={store}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: wp(240),
          },
        }}>
        <Drawer.Screen
          name={route.tabNav}
          component={TabNav}
        />
      </Drawer.Navigator>
    </Provider>
  );
};

export default Dashboard;
