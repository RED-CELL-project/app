import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const PRIMARY_COLOR = '#F1AEAE';
const SECONDARY_COLOR = '#A80B29';

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: SECONDARY_COLOR, size: 65, }}
        centerComponent={{ text: 'RED CELL', style: { color: SECONDARY_COLOR, fontSize: 36, fontWeight: 'bold' } }}
        containerStyle={styles.header}
      />
      <Button
        title="Télécharger et envoyer mes données"
        titleStyle={{ color: 'black' }}
        type="clear"
        buttonStyle={styles.boutons}
        icon={
          <Icon
            name="arrow-right"
            size={30}
            color="black"
          />
        }
        iconLeft
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: 110,
    marginBottom: 50,
  },
  boutons: {
    backgroundColor: PRIMARY_COLOR,
  },
});