import { StyleSheet, View, Text } from "react-native";
import {Link} from "expo-router";


export default function pilulier() {
    return(
        <View style={styles.container}>
            <Text>Test</Text>
            <Link href="/">retour</Link>
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
  