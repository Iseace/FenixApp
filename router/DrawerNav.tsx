import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/views/main/HomeView';
import MediaScreen from '../src/views/main/ToolsView';
import ShopScreen from '../src/views/main/ShopView';
import MembershipScreen from '../src/views/main/MembershipView';
import AboutMe from '../src/views/main/AboutMeView';
import HipnosisScreen from '../src/views/main/HipnosisView';
import MeditacionesScreen from '../src/views/main/MeditacionesView';


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