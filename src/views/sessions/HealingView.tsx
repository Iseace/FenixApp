import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';

const HealingView = () => {
  return (
    <View style={styles.container}>
      <Image>

      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PALE_GRAY,
  },
  text: {
    fontFamily: 'AlexBrush',
    fontSize: 38,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HealingView;
