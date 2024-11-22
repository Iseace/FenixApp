import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../src/screens/Login';
import RegisterPage from '../src/screens/Register';
import ForgotPassPage from '../src/screens/ForgotPass';
import HomeScreen from '../src/screens/Home';
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
        headerBackImage: () => (
          <Image
            source={require('../src/assets/Union.png')} // Path to your custom icon
            style={styles.backIcon}
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
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default AuthStack;
