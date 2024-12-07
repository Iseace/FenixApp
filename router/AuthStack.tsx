import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import images from '../src/constants/imgs';

import LoginPage from '../src/views/auth/LoginView';
import RegisterPage from '../src/views/auth/RegisterView';
import ForgotPassPage from '../src/views/auth/ForgotPView';
import DrawerNavigator from './DrawerNav';

import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F9FAFB',
        },
        headerTitleStyle: {
          fontFamily: "AlegreyaSans-Regular",
          fontSize: 24,
          color: '#000000',
        },
        headerRight: () => (
          <Image
            source={images.logo}
            style={styles.logo}
          />
        ),
      }}
    >
      <Stack.Screen
        name={ROUTES.STACK.LOGIN}
        component={LoginPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={ROUTES.STACK.REGISTER}
        component={RegisterPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={ROUTES.STACK.FORGOT_PASSWORD}
        component={ForgotPassPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={ROUTES.STACK.HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default AuthStack;

