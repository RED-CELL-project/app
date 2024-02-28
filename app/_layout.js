import { Slot } from 'expo-router';
import Navbar from '../components/Navbar';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome5';


// Nous sert a garder la navbar et tout sur la page, seul changera ce qu'il y a dans <Slot />
export default function HomeLayout() {
  return (
    <>
    <Drawer>
      <Drawer.Screen
      name='index'
      options={{
        drawerLabel: 'Acceuil',
        headerTitle: 'Acceuil',
        drawerIcon: ({color, size}) => (
          <Ionicons
             name="home-outline" size={size} color={color}
          />
        )

      }
      }
      />

    <Drawer.Screen
          name='pilulier'
          options={{
            drawerLabel: 'Pilulier',
            headerTitle: 'Pilulier',
            drawerIcon: ({color, size}) => (
              <FontAwesome
                 name="pills" size={size} color={color}
              />
            )
          }
          }
          />
    <Drawer.Screen
          name='extraction_transmission'
          options={{
            drawerLabel: 'Extraction',
            headerTitle: 'Extraction',
            drawerIcon: ({color, size}) => (
              <FontAwesome
                 name="usb" size={size} color={color}
              />
            )
          }
          }
          />
    <Drawer.Screen
          name='historique'
          options={{
            drawerLabel: 'Historique',
            headerTitle: 'Historique',
            drawerIcon: ({color, size}) => (
              <Ionicons
                 name="analytics-outline" size={size} color={color}
              />
            )
          }
          }
          />
    <Drawer.Screen
          name='sign_in'
          options={{
            drawerLabel: 'Connexion',
            headerTitle: 'Connexion',
            drawerIcon: ({color, size}) => (
              <Ionicons
                 name="person-outline" size={size} color={color}
              />
            )
          }
          }
          />
    <Drawer.Screen
          name='legal'
          options={{
            drawerLabel: 'Legal',
            headerTitle: 'Legal',
            drawerIcon: ({color, size}) => (
              <FontAwesome
                 name="balance-scale" size={size} color={color}
              />
            )
          }
          }
          />
    </Drawer>
    </>
  );
}