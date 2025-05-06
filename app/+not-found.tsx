import { View, StyleSheet } from "react-native";
import { Link, Stack} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: 'Ops!! Página não encontrada'}}/>
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
             Voltar para Home
        </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: '#9587ba'
  },
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    fontFamily: 'monospace',
  }
})