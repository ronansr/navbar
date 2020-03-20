import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default class DetailScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Detail')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
