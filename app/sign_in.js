import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from "react";

export default function App() {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.afficheContainer}>
      <Text style = {styles.texte1}>Connexion</Text>
      <TextInput
            style={styles.Case}
            placeholder="identifiant"
            onChangeText={val => {setID(val)}}
            />
      <TextInput
            style={styles.Case}
            placeholder="Mot de passe"
            onChangeText={val => {setPassword(val)}}
            />
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  texte1 : {
    color : 'white',
    marginVertical : 11,
    fontSize : 20,
    shadowOffset : 'on',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffe8eb',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 15
  },
  afficheContainer: {
    elevation : 10,
    flex: 0,
    backgroundColor: '#ed647e',
    alignItems: 'center',
    justifyContent: 'center',
    height : 200,
    borderRadius : 10,
    width : 300,
  },
  Case: {
    width: '80%',
    marginVertical: 10,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    elevation : 10,
  }
});
