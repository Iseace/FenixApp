import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const MeditacionesScreen = () => {
  const [selectedSection, setSelectedSection] = useState('section1');

  const renderContent = () => {
    if (selectedSection === 'section1') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Meditaciones</Text>
          <Text style={styles.paragraph}>
            Aqui se mostraran las meditaciones que has comprado
          </Text>
        </ScrollView>
      );
    }

    if (selectedSection === 'section2') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Meditaciones</Text>
          <Text style={styles.paragraph}>
            Aqui s mostraran las meditaciones que puedes comprar
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
          >Mis Meditaciones</Text>
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
          >Mas meditaciones</Text>
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
    backgroundColor: '#F9FAFB',
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
    backgroundColor: '#FFFFFF',
  },
  activeButton: {
    backgroundColor: '#C88676',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C88676',
  },
  activeText: {
    color: '#FCF8F7',
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
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default MeditacionesScreen;
