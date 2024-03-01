import FontAwesome from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
                        <FontAwesome name="home" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
                        headerTitleAlign: 'center',
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
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
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
                    }}
                />
                <Drawer.Screen
                    name='extraction_transmission'
                    options={{
                        drawerLabel: 'Extraction',
                        headerTitle: 'Extraction',
                        drawerIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="usb-port" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
                    }}
                />
                <Drawer.Screen
                    name='historique'
                    options={{
                        drawerLabel: 'Historique',
                        headerTitle: 'Historique',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="chart-line" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
                    }}
                />
                <Drawer.Screen
                    name='tuto'
                    options={{
                        drawerLabel: 'Tutoriels',
                        headerTitle: 'Tutoriels',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="book" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
                    }}
                />
                <Drawer.Screen
                    name='sign_in'
                    options={{
                        drawerLabel: 'Connexion',
                        headerTitle: 'Connexion',
                        drawerIcon: ({color, size}) => (
                        <FontAwesome name="user-alt" size={size} color={color}/>
                        ),
                        headerStyle: { backgroundColor: color.accent },
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
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
                        headerTintColor: color.accent_content,
                        headerTitleStyle: { fontSize: 30 },
                        drawerStyle: { backgroundColor: color.secondary },
                        drawerActiveTintColor: color.primary_content,
                        drawerInactiveTintColor: color.secondary_content,
                        drawerActiveBackgroundColor: color.primary
                    }}
                />
            </Drawer>
        </>
    );
}