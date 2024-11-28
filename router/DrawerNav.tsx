import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/home/HomeScreen';
import MediaScreen from '../src/screens/home/ToolsScreen';
import ShopScreen from '../src/screens/home/ShopScren';
import MembershipScreen from '../src/screens/home/MembershipScreen';
import AboutMe from '../src/screens/home/AboutMeScreen';
import HipnosisScreen from '../src/screens/home/HipnosisScreen';
import MeditacionesScreen from '../src/screens/home/MeditacionesScreen';


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
      <Drawer.Screen name="About" component={AboutMe} />
      <Drawer.Screen name="Meditaciones" component={MeditacionesScreen} />
      <Drawer.Screen name="Hipnosis" component={HipnosisScreen} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;