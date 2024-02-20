import { Text, View } from 'react-native';
import { Link } from 'expo-router';

// Route de base
export default function Page() {
  return (
  <View>
    <Text>Home page</Text>
    <Link push href="/pilulier">Login</Link>

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
