import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BtnMenu from './BtnMenu';
import Topo from './Topo';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.controlaMenuLateral = this.controlaMenuLateral.bind(this);
    
  }
  controlaMenuLateral(){
    alert(this.props.menu);
    // if(!this.state.menuLateral){
    //   navigation.openDrawer();
    // }else{
    //   navigation.closeDrawer();
    //   Topo.testando();
    // }
  }
  render() {
    return (
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <Text>Home Screen</Text>
      //   <Button
      //     title="Go to Details"
      //     onPress={() => navigation.navigate('Detail')}
      //   />
      // </View>

      ///NAVEGADORES DE ANINHAMENTO
      // <Tab.Navigator>
      //   <Tab.Screen name="Feed" component={Feed} />
      //   <Tab.Screen name="Messages" component={Messages} />
      // </Tab.Navigator>

      ///MODAL
      <View style={{flex: 1}}>
        <View>
          <Topo navigation={this.props.navigation} />
        </View>
        <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>This is the home screen!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Detail')}
            title="Open Modal"
          />
          <BtnMenu navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
