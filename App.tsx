import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './router/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}