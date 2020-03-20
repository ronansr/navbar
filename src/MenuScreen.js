import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import BtnMenu from './BtnMenu';

export default class MenuScreen extends React.Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator drawerType="slide">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{drawerLabel: 'Testando drawer label', headerShown: true}}
        />
        <Drawer.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: true}}
        />
      </Drawer.Navigator>
    );
  }
}
