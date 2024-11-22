import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/Home';
import MediaScreen from '../src/screens/Media';
import ShopScreen from '../src/screens/Shop';
import MembershipScreen from '../src/screens/Membership';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle(props) {
          false
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Media" component={MediaScreen} />
      <Drawer.Screen name="Shop" component={ShopScreen} />
      <Drawer.Screen name="Membership" component={MembershipScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;