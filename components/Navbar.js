import FontAwesome from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Drawer } from 'expo-router/drawer';
import color from '../styles/color';
import { Dimensions, Pressable } from 'react-native';
import { Menu } from 'lucide-react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

export default function Navbar() {
    const tailleHeader = Math.floor(Dimensions.get('screen').height/7);
    const navigation = useNavigation();
    return (
        <>
            <Drawer screenOptions = {{
                swipeEdgeWidth: 150,
                headerTintColor: color.accent_content,
                headerTitleStyle: { fontSize: 30 },
                headerStyle: { backgroundColor: color.accent, height: tailleHeader },
                drawerStyle: { backgroundColor: color.secondary },
                drawerActiveTintColor: color.primary_content,
                drawerInactiveTintColor: color.secondary_content,
                drawerActiveBackgroundColor: color.primary,
                headerLeft: () => <Pressable
                onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  paddingLeft: 15, // Adjust padding as needed
                })}
              >
                <Menu size={40} color={color.accent_content} strokeWidth={2.3} />
              </Pressable>
                

                
            }}>
                

                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Accueil',
                        headerTitle: 'RED CELL',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="home" size={size} color={color}/>
                        ),
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 35 },
                        headerTitleAlign: 'center'
                    }}
                />
                <Drawer.Screen
                    name='pilulier'
                    options={{
                        drawerLabel: 'Pilulier',
                        headerTitle: 'Pilulier',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="pills" size={size} color={color}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name='extraction_transmission'
                    options={{
                        drawerLabel: 'Extraction',
                        headerTitle: 'Extraction',
                        drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="usb-port" size={size} color={color}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name='historique'
                    options={{
                        drawerLabel: 'Historique',
                        headerTitle: 'Historique',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="chart-line" size={size} color={color}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name='tuto'
                    options={{
                        drawerLabel: 'Tutoriels',
                        headerTitle: 'Tutoriels',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="book" size={size} color={color}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name='sign_in'
                    options={{
                        drawerLabel: 'Connexion',
                        headerTitle: 'Connexion',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="user-alt" size={size} color={color}/>
                        )
                    }}

                />
                <Drawer.Screen
                    name='legal'
                    options={{
                        drawerLabel: 'Légal',
                        headerTitle: 'Légal',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="balance-scale" size={size} color={color}/>
                        )
                    }}
                />
            </Drawer>
        </>
    );
}