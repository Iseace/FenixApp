import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import images from '../src/constants/imgs';

import LoginPage from '../src/screens/auth/Login';
import RegisterPage from '../src/screens/auth/Register';
import ForgotPassPage from '../src/screens/auth/ForgotPass';
import DrawerNavigator from './DrawerNav';

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
            source={images.logo} // Replace with your logo path
            style={styles.logo}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPassPage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40, // Adjust width
    height: 40, // Adjust height
    resizeMode: 'contain',
    marginRight: 10, // Add some margin if needed
  },
});

export default AuthStack;
