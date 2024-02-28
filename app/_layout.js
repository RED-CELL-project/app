import { Slot } from 'expo-router';
import Navbar from '../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Nous sert a garder la navbar et tout sur la page, seul changera ce qu'il y a dans <Slot />
export default function HomeLayout() {
  return (
    <>
      <SafeAreaView style = {{ flex: 1 }}>
        <Navbar />
        <Slot />
      </SafeAreaView>    
    </>
  );
}