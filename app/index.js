import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import Heading from '../components/Heading';
import color from '../styles/color';
import { Pill } from 'lucide-react-native';


/*const fakeStorage = {
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
              "start-day": 143576578680
          },
          "hours": [6435543, 54644564]
      }
  ]
}*/

// Route de base
export default function Page() {
  return (
  <View style={styles.container}>
    <Heading icon={Pill} text={"Pilulier"}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    padding: 10
  },
});
