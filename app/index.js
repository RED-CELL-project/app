import { StyleSheet, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Heading from '../components/Heading';
import DrugRectangle from '../components/DrugRectangle';
import color from '../styles/color';
import { Pill, SquareActivity } from 'lucide-react-native';


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
    <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false} 
      style={styles.drugsContainer} 
      contentContainerStyle={styles.drugsContentContainer}
    >
      <DrugRectangle/>
      <DrugRectangle/>
      <DrugRectangle/>
    </ScrollView>
    <Heading icon={SquareActivity} text={"Analyse"}/>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  drugsContainer: {
    overflow: 'visible',
    flexGrow: 0
  },
  drugsContentContainer: {
    gap: 10
  }
});
