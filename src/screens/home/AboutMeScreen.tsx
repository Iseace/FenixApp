import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import Fonts from '../../constants/fonts';
import images from '../../constants/imgs';

const AboutScreen = () => {

  const [fontsLoaded] = useFonts({
    AlexBrush: Fonts.AlexBrush,
    AlegreyaSans: Fonts.AlegreyaSans,
    Bold: Fonts.AlegreyaSansBold,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Sobre Mi</Text>
        <Image source={images.Wendy2} style={styles.imageRectangular} />
      </View>
      <Text style={styles.title}>¡Hola, es un gusto tenerte por aquí!</Text>
      <Text style={styles.paragraph}>
        Mi nombre es <Text style={styles.bold}>Wendy Staufert</Text>, soy <Text style={styles.bold}>psicóloga holística</Text> especializada en hipnosis clínica y regresiva, y soy creadora de la Sanación e Hipnosis Fénix<Text style={styles.bold}>©</Text>; una herramienta maravillosa que te ayudará a sanar y despertar desde los niveles más profundos de tu inconsciente a nivel ancestral, energético, mental y espiritual.
      </Text>
      <Text style={styles.paragraph}>
        Mi propósito es acompañarte a descubrir quién realmente eres y tomar las riendas de la transformación absoluta de tu vida de una manera diferente, gozosa y sin tanto drama.
      </Text>
      <Text style={styles.paragraph}>
        Me apasiona acompañar a las personas a pasar de sentirse tristes, frustrados, infelices, perdidos a tener claridad, estar en paz, sanar, amarse, que disfruten y creen la vida que siempre han anhelado vivir.
      </Text>
      <Text style={styles.paragraph}>
        Tengo +9 años de experiencia y ¡he acompañado +1k casos de maravillosas transformaciones!
      </Text>
      <Text style={styles.paragraph}>
        Cuento con varias certificaciones en distintas herramientas, como:
      </Text>
      <Text style={styles.list}>
        – Hipnosis clínica, Ericksoniana, cognitivo-conductual, regresiones{'\n'}
        – EMDR{'\n'}
        – EFT Tapping{'\n'}
        – Maestra en Reiki Usui{'\n'}
        – Access Consciousness{'\n'}
        – Registros Akáshicos{'\n'}
        – Maestra en Sanación Atlante, Venusiana y Lemuriana{'\n'}
        – Numerología{'\n'}
        – Thetahealing™️{'\n'}
        – Angeloterapia{'\n'}
        – Healy{'\n'}
        – Constelaciones Familiares
      </Text>
      <View style={styles.section}>
        <Image source={images.Wendy4} style={styles.imageRectangular} />
        <Text style={styles.title}>
          Tengo mi <Text style={styles.bold}>consulta privada</Text> de manera presencial y online a cualquier parte del mundo (hay lista de espera para consultas 1:1, te agradezco tu confianza y paciencia).
        </Text>
      </View>
      <Text style={styles.paragraph}>
        También imparto <Text style={styles.bold}>talleres</Text>, <Text style={styles.bold}>sesiones grupales</Text>, ofrezco una <Text style={styles.bold}>membresía exclusiva</Text> con maravillosos beneficios y a un costo muy ACCESIBLE.
      </Text>
      <Text style={styles.paragraph}>
        También tengo mi propia APP en donde puedes acceder a todas las hipnosis fénix<Text style={styles.bold}>©</Text>, meditaciones y programas fénix<Text style={styles.bold}>©</Text>; una app espiritual que no te arrepentirás de tener y que te aseguro tu vida cambiará en el momento en que la descargues.
      </Text>
      <Text style={styles.paragraph}>
        Tengo un podcast que se llama Fénix… como ya te diste cuenta mi marca es Fénix<Text style={styles.bold}>©</Text> porque así como yo lo hice:
      </Text>
      <Text style={styles.paragraph}>¡Te ayudo a renacer desde tus cenizas con fuerza y sabiduría!</Text>
      <View style={styles.section}>
        <Image source={images.Wendy2} style={styles.imageRectangular} />
        <Text style={styles.title}>
          Mi nombre Wendy significa: “la que es amiga de verdad”
        </Text>
      </View>
      <Text style={styles.paragraph}>
        Mi sol está en Virgo, mi ascendente en Sagitario y mi luna en Capricornio.
      </Text>
      <Text style={styles.paragraph}>
        Mi <Text style={styles.bold}>misión de vida</Text> en numerología es 11: significa que soy guía espiritual y he encarnado para <Text style={styles.bold}>acompañar el despertar individual y colectivo</Text>; ayudarte a recordar quién eres y conectar con la esencia crística que existe dentro de ti.
      </Text>
      <Text style={styles.paragraph}>Soy semilla estelar y no es coincidencia que estés aquí.</Text>
      <Text style={styles.paragraph}>Gracias por estar aquí, juntos, somos luz: {'\n'}Tu amiga y guía</Text>
      <View style={styles.section}>
        <Image source={images.Wendy1} style={styles.imageRectangular} />
        <Text style={styles.title}>Misión</Text>
      </View>
      <Text style={styles.paragraph}>
        <Text style={styles.paragraph}>
          Diseño de espacios para <Text style={styles.bold}>conectar a las personas a su esencia</Text> para liberar las capas que los limitan a alzanzar su máximo potencial, por medio de <Text style={styles.bold}>terapia personal, talleres y sesiones grupalesa</Text>, enfocados hacia personas y empresas con interés en su <Text style={styles.bold}>crecimiento personal y espiritual</Text> para ser creadores de su realidad individual y colectiva.
        </Text>
      </Text>
      <View style={styles.section}>
        <Text style={styles.title}>Visión</Text>
      </View>
      <Text style={styles.paragraph}>
        Facilitar el camino de <Text style={styles.bold}>auotodescubrimiento y autosanación</Text> para un futuro consciente individual y colectivo, para sostenerlo a través del tiempo  y del espacio que perdure tomado como base el crecimiento personal y espiritual tal vez que se convierta en .<Text style={styles.bold}>una forma de vida</Text>
      </Text>
      <View style={styles.section}>
        <Text style={styles.title}>Valores</Text>
      </View>
      <Text style={styles.list}>
        • Amor
        • Seguridad
        • Responsabilidad
        • Gratitud
        • Empatía
        • Respecto
        • Respeto
        • Paciencia
        • Sinceridad
        • Humildad
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    alignItems: 'center',
    marginBottom: 16,
  },
  imageRectangular: {
    width: '100%',
    height: 180,
    marginBottom: 8,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 50,
  },
  heading: {
    fontFamily: 'AlexBrush',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#CF8C7B',
  },
  title: {
    fontFamily: 'Bold',
    fontSize: 20,
    marginBottom: 12,
    textAlign: 'center',
    color: '#723C2E',
  },
  paragraph: {
    fontFamily: 'AlegreyaSans',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#3E3E3E',
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    fontFamily: 'AlegreyaSans',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#3E3E3E',
  },
});

export default AboutScreen;
