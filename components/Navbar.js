import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Drawer } from 'expo-router/drawer';
import color from '../styles/color';

export default function Navbar() {
    return (
        <>
            <Drawer>
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Accueil',
                        headerTitle: 'RED CELL',
                        drawerIcon: ({color, size}) => (
                        <Ionicons name="home-outline" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
                        headerTitleAlign: 'center',
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='pilulier'
                    options={{
                        drawerLabel: 'Pilulier',
                        headerTitle: 'Pilulier',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="pills" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='extraction_transmission'
                    options={{
                        drawerLabel: 'Extraction',
                        headerTitle: 'Extraction',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="usb" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='historique'
                    options={{
                        drawerLabel: 'Historique',
                        headerTitle: 'Historique',
                        drawerIcon: ({color, size}) => (
                        <Ionicons name="analytics-outline" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='tuto'
                    options={{
                        drawerLabel: 'Tutoriels',
                        headerTitle: 'Tutoriels',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="play-circle" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='sign_in'
                    options={{
                        drawerLabel: 'Connexion',
                        headerTitle: 'Connexion',
                        drawerIcon: ({color, size}) => (
                        <Ionicons name="person-outline" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
                <Drawer.Screen
                    name='legal'
                    options={{
                        drawerLabel: 'Légal',
                        headerTitle: 'Légal',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="balance-scale" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.secondary,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.primary },
                        drawerActiveTintColor: color.secondary,
                        drawerInactiveTintColor: color.secondary,
                        drawerActiveBackgroundColor: color.primaryLight
                    }}
                />
            </Drawer>
        </>
    );
}