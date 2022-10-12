import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './screens/Home';
import Product from './screens/Product';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Feed({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        useLegacyImplementation
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Product" component={Product} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
