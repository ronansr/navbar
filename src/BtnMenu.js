import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer, DrawerActions, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// export default class BtnMenu extends React.Component {
//   constructor(props) {
//     super(props); 
//   }
//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
//         title="Abrir Menu"
//         color="grey"
//       />
//     );
//   }
// }

// function BtnMenu ({navigation}) {
//   // const {navigation} = props; ///recebe a props passada em homescreen
//   const openMenu = () => {
//     navigation.openDrawer();
//     // console.log(navigation);
//   }
//   const nav = () => {
//     navigation.navigate('Menu', () => navigation.openDrawer());
//   }
//   return (
//     <Button
//       onPress={openMenu}
//       title="Abrir Menu"
//       color="grey"
//     />
//   );
// };

function BtnMenu () {
  const navigation = useNavigation(); ///recebe a props passada em homescreen
  const openMenu = () => {
    navigation.openDrawer();
    // console.log(navigation);
  }
  const nav = () => {
    navigation.navigate('Menu', () => navigation.openDrawer());
  }
  return (
    <Button
      onPress={openMenu}
      title="Abrir Menu"
      color="grey"
    />
  );
};
export default BtnMenu;
