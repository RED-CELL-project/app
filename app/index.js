import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

// Route de base
export default function Page() {
  return (
  <View style={styles.container}>
    <Text>Home page</Text>
    <Link href="/pilulier">Login</Link>
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
