import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeView from '../src/views/main/HomeView';
import MediaView from '../src/views/main/ToolsView';
import ShopView from '../src/views/main/ShopView';
import MembershipView from '../src/views/main/MembershipView';
import AboutMeView from '../src/views/main/AboutMeView';
import HipnosisView from '../src/views/main/HipnosisView';
import MeditacionesView from '../src/views/main/MeditacionesView';
import HealingView from '../src/views/sessions/HealingView';
import KidsHealingView from '../src/views/sessions/KidsHealingView'
import UrgentView from '../src/views/sessions/UrgentView';

import { ROUTES, DRAWER_CONFIG } from './routes';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={DRAWER_CONFIG.screenOptions}>
      <Drawer.Screen name={ROUTES.DRAWER.HOME} component={HomeView} />
      <Drawer.Screen name={ROUTES.DRAWER.MEDIA} component={MediaView} />
      <Drawer.Screen name={ROUTES.DRAWER.SHOP} component={ShopView} />
      <Drawer.Screen name={ROUTES.DRAWER.MEMBERSHIP} component={MembershipView} />
      <Drawer.Screen name={ROUTES.DRAWER.ABOUT_ME} component={AboutMeView} />
      <Drawer.Screen name={ROUTES.DRAWER.MEDITATIONS} component={MeditacionesView} />
      <Drawer.Screen name={ROUTES.DRAWER.HYPNOSIS} component={HipnosisView} />
      <Drawer.Screen name={ROUTES.DRAWER.HEALING} component={HealingView} />
      <Drawer.Screen name={ROUTES.DRAWER.HEALING_KIDS} component={KidsHealingView} />
      <Drawer.Screen name={ROUTES.DRAWER.URGENT} component={UrgentView} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;