import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MeditacionesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meditaciones</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MeditacionesScreen;
