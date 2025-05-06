import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Acreditamos que a beleza vai além da aparência – é uma forma de expressão e autocuidado. Oferecemos produtos de alta qualidade para realçar sua beleza natural, com fórmulas inovadoras e ingredientes cuidadosamente selecionados.

Nosso compromisso é proporcionar uma experiência única, trazendo tendências, sustentabilidade e resultados eficazes para todos os tipos de pele e cabelo. Seja você apaixonado por skincare, maquiagem ou cuidados capilares, aqui você encontra tudo o que precisa para se sentir ainda mais incrível.

Descubra nossa coleção e transforme sua rotina de beleza! ✨

 </Text>
 </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: '#9587ba'
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  box:{
    width:300
  }
})