import { StyleSheet, View, Text } from "react-native";
import {Link} from "expo-router";


export default function pilulier() {
    return(
        <View>
            <Text>Test</Text>
            <Link replace href="/index">retour</Link>
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
  