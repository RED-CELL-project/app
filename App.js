import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>RED CELL</Text>
      <Text></Text>
      <Text>Télécharger et envoyer mes données</Text>
      <Text>Mon historique</Text>
      <Text>Mon pilulier</Text>
      <Text>Tutoriels</Text>
      <Text>Test modif</Text>
      <StatusBar style="auto" />
    </View>
  );
}

header: {
  backgroundColor: PRIMARY_COLOR,
  height: 110,
  marginBottom: 50,
},
boutons: {
  backgroundColor: PRIMARY_COLOR,
},

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
