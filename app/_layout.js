import { Slot } from 'expo-router';

// Nous sert a garder la navbar et tout sur la page, seul changera ce qu'il y a dans <Slot />
export default function HomeLayout() {
  return (
    <>
      <Slot />
    </>
  );
}