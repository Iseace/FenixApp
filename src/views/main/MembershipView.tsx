import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';

const MembershipScreen = () => {
  const [selectedSection, setSelectedSection] = useState('section1');

  const [fontsLoaded] = useFonts({
    AlegreyaSans: Fonts.AlegreyaSans,
    Bold: Fonts.AlegreyaSansBold,

  });

  if (!fontsLoaded) return null;

  const renderContent = () => {
    if (selectedSection === 'section1') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Meditaciones</Text>
          <Text style={styles.paragraph}>
            Aquí se mostrarán todas las Meditaciones
          </Text>
        </ScrollView>
      );
    }

    if (selectedSection === 'section2') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Hipnosis</Text>
          <Text style={styles.paragraph}>
            Aquí se mostrarán todas las Hipnosis
          </Text>
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.titleButton,
            selectedSection === 'section1' && styles.activeButton,
          ]}
          onPress={() => setSelectedSection('section1')}
        >
          <Text
            style={[
              styles.titleText,
              selectedSection === 'section1' && styles.activeText,
            ]}
          >
            Meditaciones
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.titleButton,
            selectedSection === 'section2' && styles.activeButton,
          ]}
          onPress={() => setSelectedSection('section2')}
        >
          <Text
            style={[
              styles.titleText,
              selectedSection === 'section2' && styles.activeText,
            ]}
          >
            Hipnosis
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PALE_GRAY,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
  },
  activeButton: {
    backgroundColor: Colors.WARM_PINK,
  },
  titleText: {
    fontSize: 16,
    color: Colors.WARM_PINK,
    fontFamily: 'Bold',
  },
  activeText: {
    color: Colors.SOFT_WHITE,
    fontFamily: 'Bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'AlegreyaSans',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    fontFamily: 'AlegreyaSans',
  },
});
2
export default MembershipScreen;
