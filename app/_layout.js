import 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import Navbar from '../components/Navbar';

// Nous sert a garder la navbar et tout sur la page, seul changera ce qu'il y a dans <Slot />
export default function HomeLayout() {
  return (
    <>
    <Navbar />
    <Slot />      
    </>
  );
}