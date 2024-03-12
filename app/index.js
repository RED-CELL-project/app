import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';


const fakeStorage = {
  "drug-list": [
      {
          "name": "Prévisan",
          "enable": true,
          "power": 3,
          "unit": "mg",
          "frequency": {
              "per-week":[true, false, true, false, false, true, false],
              "every-x-day": null,
              "start-day": null
          },
          "hours": [6435543, 54644564]
      },
      {
          "name": "Prévisan",
          "enable": true,
          "power": 3,
          "unit": "pilules",
          "frequency": {
              "per-week":null,
              "every-x-day": 3,
              "start-day": 143576578680979885
          },
          "hours": [6435543, 54644564]
      }
  ]
}

// Route de base
export default function Page() {
  return (
  <View style={styles.container}>
    <Text>Home page</Text>
    <Link href="/pilulier">pilulier</Link>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
