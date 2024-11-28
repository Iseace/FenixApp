import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.column}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.mainInput}>
            Bienvenido a este espacio donde conectarás con tu mente, tu
            espiritualidad y tu amor propio para acceder a otro nivel de
            Consciencia.
          </Text>
        </View>

        {/* Meditations Section */}
        <Text style={styles.SubTitle}>Meditaciones</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Meditacion Abundacia 8-8-8</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Meditacion dar y recibir</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Hipnosis - SERvir</Text>
          </View>
        </ScrollView>

        <View style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Saber Más</Text>
        </View>

        {/* Hypnosis Section */}
        <Text style={styles.SubTitle}>Hipnosis</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Hipnosis - SERvir</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Hipnosis - Vinculo Materno</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>Hipnosis - SERvir</Text>
          </View>
        </ScrollView>

        <View style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Saber Más</Text>
        </View>

        {/* Phoenix Programs Section */}
        <Text style={styles.SubTitle}>Programas Fenix</Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.image}
            />
            <Text style={styles.CardTitle}>21 dias de amor propio</Text>
          </View>
        </ScrollView>
        <View style={styles.BtnContainer}>
          <Text style={styles.BtnText}>Saber Más</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  scrollView: {
    paddingVertical: 16,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CF8C7B",
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 14,
    marginBottom: 7,
    marginHorizontal: 23,
  },
  horizontalScroll: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 8,
    marginHorizontal: 8,
    width: Dimensions.get('window').width * 0.90,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  image: {
    borderRadius: 8,
    height: 130,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    color: "#C88676",
    fontSize: 38,
    textAlign: "center",
    marginBottom: 13,
  },
  mainInput: {
    color: "#3E3E3E",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 9,
  },
  SubTitle: {
    color: "#C88676",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  CardTitle: {
    color: "#723C2E",
    fontSize: 14,
    textAlign: "center",
  },
  BtnText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  BtnContainer: {
    alignItems: "center",
    backgroundColor: "#CF8C7B",
    borderRadius: 34,
    paddingVertical: 5,
    marginBottom: 23,
    marginHorizontal: 145,
  },
});

export default HomeScreen;
