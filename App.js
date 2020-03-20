import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import MenuScreen from './src/MenuScreen';
import BtnMenu from './src/BtnMenu';
import Topo from './src/Topo';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            menu={this.props.menuLateral}
            options={({navigation}) => {
              return {
                title: 'My MIND',
                headerShown: true,
                headerTitle: () => <BtnMenu navigation={navigation} />,
              };
            }}
          />
        </Stack.Navigator>
        {/* <MenuScreen /> */}
      </NavigationContainer>
    );
  }
}
