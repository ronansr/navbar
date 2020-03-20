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

// function HomeScreen({navigation}) {
//   return (
//     // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     //   <Text>Home Screen</Text>
//     //   <Button
//     //     title="Go to Details"
//     //     onPress={() => navigation.navigate('Detail')}
//     //   />
//     // </View>

//     ///NAVEGADORES DE ANINHAMENTO
//     // <Tab.Navigator>
//     //   <Tab.Screen name="Feed" component={Feed} />
//     //   <Tab.Screen name="Messages" component={Messages} />
//     // </Tab.Navigator>

//     ///MODAL
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 30}}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//       <BtnMenu />
//     </View>
//   );
// }
function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
function Feed({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>
      <Button title="Abrir Menu " onPress={() => navigation.toggleDrawer()} />
      <Button
        title="Go to Messages"
        onPress={() => navigation.navigate('Messages')}
      />
    </View>
  );
}
// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./src/imgs/logo.png')}
    />
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

// const BtnMenu = (navigation) => {
//   return (
//     <Button
//       onPress={() => alert({navigation})}
//       title="Menu"
//       color="grey"
//     />
//   );
// };
function Menu() {
  return (
    <Drawer.Navigator options={{headerShown: false}}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Modal" component={RootStackScreen} options={{}} />
      <Drawer.Screen name="Messages" component={Messages} options={{}} />
      <Drawer.Screen name="Detail" component={DetailsScreen} options={{}} />
    </Drawer.Navigator>
  );
}
function Pages() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Messages" component={Messages} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}
const Stack = createStackNavigator();
const Tab = createStackNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuLateral: 'ronan'};
  }
  render() {
    return (
      // <NavigationContainer>
      //   {/* <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#f4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //       },
      //       headerRight: () => (
      //         <Button
      //           onPress={() => alert('This is a button!')}
      //           title="Info"
      //           color="grey"
      //         />
      //       ),
      //       headerLeft: () => (
      //         <Button
      //           onPress={() => navigation.toggleDrawer()}
      //           title="Menu"
      //           color="grey"
      //         />
      //       ),
      //       // headerTitle: props => <LogoTitle {...props} />
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'My Home',
      //       }}
      //     />
      //     <Stack.Screen name="Details" component={DetailsScreen} /> */}

      //   {/* TESTANDO MODAL
      //   <Stack.Screen name="RootStackScreen" component={RootStackScreen} options={{ headerShown: false }}/>
      //   <Stack.Screen name="MainStackScreen" component={MainStackScreen} /> */}
      //   {/* </Stack.Navigator> */}

      //   {/* Testando menu por gavetas */}
      //   {/* <Drawer.Navigator initialRouteName="Home">
      //     <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: true }}/>
      //     <Drawer.Screen name="Details" component={DetailsScreen} />
      //   </Drawer.Navigator> */}

      //   <Stack.Navigator
      //     screenOptions={{
      //       headerRight: () => (
      //         <Button
      //           onPress={navigation => navigation.toggleDrawer()}
      //           title="Info"
      //           color="grey"
      //         />
      //       ),
      //     }}>
      //     <Stack.Screen name="Menu" component={Menu} />
      //   </Stack.Navigator>
      // </NavigationContainer>
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
