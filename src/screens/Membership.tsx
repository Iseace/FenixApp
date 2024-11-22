import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MembershipScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Membership</Text>
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

export default MembershipScreen;
