import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

import Colors from '../../constants/colors';
import images from '../../constants/imgs';
import Fonts from '../../constants/fonts';

const UrgentView = () => {
  const [fontsLoaded] = useFonts({
    AlexBrush: Fonts.AlexBrush,
    AlegreyaSans: Fonts.AlegreyaSans,
    Bold: Fonts.AlegreyaSansBold,
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageBanner}>
        <Image style={styles.image} source={images.UrgentConsult} />
        <View style={styles.textStyle}>
          <Text style={styles.text}>Consulta Urgente</Text>
        </View>
      </View>
      <Text style={styles.title}>
        Yo sé que hay momentos en la vida en que necesitamos algún tipo de guía profesional y quizá por tiempo o recursos es complicado agendar una sesión 1:1 completa.
      </Text>
      <Text style={styles.paragraph}>
        Por lo que pongo a tu disposición un <Text style={{ fontWeight: 'bold' }}>espacio conmigo SIN ESPERA</Text>, por WhatsApp (mensaje escrito o en audio) en donde me puedes mandar algún tema puntual en el que quisieras una guía urgente o claridad, yo te responderé por ese mismo medio en un lapso no mayor a 72hrs.
      </Text>
      <Text style={styles.subTitle}>Ejemplos de consulta urgente:</Text>
      <Text style={styles.list}>
        – ¿Qué me está mostrando tal situación?{'\n'}
        – ¿Qué no estoy viendo con esto que sucede o siento?{'\n'}
        – ¿Qué significa tal sueño?{'\n'}
        – ¿Qué debo sanar para...?{'\n'}
        – ¿Qué piensas de...?{'\n'}
        – ¿Qué me recomiendas hacer para...?{'\n'}
        – ¿Qué mensaje tienen mis seres de luz en este momento para mí?{'\n'}
        – ¿Qué hago con este comportamiento de mi hijo(a)?
      </Text>
      <Text style={styles.subTitle}>Términos y condiciones</Text>
      <Text style={styles.paragraph}>
        –Ningún pago es reembolsable ni transferible.{'\n'}
        –El precio mostrado en dólares es aproximado, el cobro se realiza en pesos mexicanos por PayPal.{'\n'}
        –La información y material ofrecido a través de los talleres, terapias, programas, hipnosis, meditaciones, ebooks, grupos y clases de Wendy Staufert son propiedad intelectual de Wendy Staufert y NO pueden ser reproducidos, vendidos, duplicados ni utilizados, en forma total o parcial, para fines comerciales ni de promoción.{'\n'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  imageBanner: {
    width: '100%',
    height: 180,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  text: {
    marginBottom: 8,
    fontSize: 38,
    color: Colors.WARM_PINK,
    textAlign: 'center',
    fontFamily: 'AlexBrush',
  },
  textStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    fontFamily: 'AlegreyaSans',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: Colors.SOFT_BLACK,
  },
  list: {
    fontFamily: 'AlegreyaSans',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
    color: Colors.SOFT_BLACK,
  },
  title: {
    fontFamily: 'Bold',
    fontSize: 20,
    marginBottom: 12,
    textAlign: 'center',
    color: Colors.DARK_TERRACOTTA,
  },
  subTitle: {
    fontFamily: 'bold',
    fontSize: 20,
    marginBottom: 12,
    textAlign: 'center',
    color: Colors.WARM_PINK,
  },
});

export default UrgentView;
