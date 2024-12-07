import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Colors from '../../constants/colors';

const RegisterView = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    // Add your register logic here
    Alert.alert(
      'Register',
      `Name: ${name}\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.linkContainer}
      >
        <Text onPress={() => navigation.navigate("Login")}
          style={styles.linkText}>¿Ya tienes una cuenta? Login</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.PALE_GRAY,
  },
  input: {
    width: '100%',
    height: 52,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: Colors.PALE_GRAY,
  },
  button: {
    width: '100%',
    height: 52,
    backgroundColor: Colors.WARM_PINK,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.PALE_GRAY,
    fontSize: 15,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
  },
  linkText: {
    color: Colors.DARK_TERRACOTTA,
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: "center",
  },
});

export default RegisterView;
