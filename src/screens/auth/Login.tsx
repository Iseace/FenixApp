import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Add your login logic here
    Alert.alert('Login', `Email: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  };

  return (
    <View style={styles.container}>
      {/* Overlay */}
      <View style={styles.overlay}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text onPress={() => navigation.navigate("Register")}
            style={styles.linkText}>Crear cuenta</Text>
          <Text
            onPress={() => navigation.navigate("ForgotPass")} style={styles.linkText}>¿Contraseña olvidada?</Text>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Ensure the video covers the entire screen
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure the content appears above the video
    padding: 20,
  },
  input: {
    width: '100%',
    height: 52,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F9FAFB',
  },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#CF8C7B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#F9FAFB',
    fontSize: 15,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
  },
  linkText: {
    color: '#723C2E',
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: "center",

  },
});

export default LoginView;
