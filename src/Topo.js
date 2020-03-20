import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Topo = props => {
  const {navigation} = props; ///recebe a props passada em homescreen
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '30%',
        backgroundColor: 'gray',
        alignItems: "center"
      }}>
      <View style={{margin: 5, marginRight: 15}}>
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="Menu"
          color="green"
        />
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>MY MIND</Text>
      </View>
    </View>
  );
};

export default Topo;
