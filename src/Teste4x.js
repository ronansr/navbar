import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import {NavigationActions} from '@react-navigation/compat';
import MenuScreen from './MenuScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}
function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    Menu: {screen: MenuScreen},
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
