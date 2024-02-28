import { Header, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import color from '../styles/color';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Header
                paddingTop = { Platform.OS === "android" ? StatusBar.currentHeight : 0 }
                backgroundColor = { color.primary }
                centerComponent = {{
                    text: "RED CELL",
                    style: {
                        color: color.secondary,
                        fontSize: 36,
                        fontWeight: "bold"
                    }
                }}
                leftComponent = {
                    <Button
                        buttonStyle = {{
                            height: 60,
                            width: 60,
                            backgroundColor: color.primary
                        }}
                        icon = { <Icon name = "bars" size = {50} color = { color.secondary }/> }
                        onPress = { () => setVisible(true) }
                    />
                }
            />
            <View style = { visible ? styles.sideBarVisible : styles.sideBarNone }>
                <Button
                    buttonStyle = {{
                        height: 60,
                        width: 60,
                        backgroundColor: color.accent
                    }}
                    icon = { <Icon name = "close" size = {50} color = { color.secondary }/> }
                    onPress = { () => setVisible(false) }
                />
                <Link
                    push href = '/pilulier'
                    style = { styles.boutonNavBar }
                    onPress = { () => setVisible(false) }>
                    <Icon name = 'download' size = {30} style = { styles.iconeNavBar }/>
                    Télécharger et envoyer mes données
                </Link>
                <Link
                    push href = '/pilulier'
                    style = { styles.boutonNavBar }
                    onPress = { () => setVisible(false) }>
                    <Icon name = 'book' size = {30} style = { styles.iconeNavBar }/>
                    Mon historique
                </Link>
                <Link
                    push href = '/pilulier'
                    style = { styles.boutonNavBar }
                    onPress = { () => setVisible(false) }>
                    <Icon name = 'calendar' size = {30} style = { styles.iconeNavBar }/>
                    Mon pilulier
                </Link>
                <Link
                    push href = '/pilulier'
                    style = { styles.boutonNavBar }
                    onPress = { () => setVisible(false) }>
                    <Icon name = 'film' size = {30} style = { styles.iconeNavBar }/>
                    Tutoriels
                </Link>
            </View>
            <Pressable
                style = { visible ? styles.zoneQuitterClickable : styles.zoneQuitterNone }
                onPress = { () => setVisible(false) }>
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    sideBarVisible: {
        backgroundColor: color.accent,
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '80%',
        bottom: 0,
        left: 0,
        display: 'flex'
    },
    sideBarNone: {
        backgroundColor: color.accent,
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '80%',
        bottom: 0,
        left: '-100%',
        display: 'flex'
      },
    zoneQuitterClickable: {
        backgroundColor: 'black',
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '20%',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        diplay: 'flex'
      },
    zoneQuitterNone: {
        display: 'none'
      },
    boutonNavBar: {
        width: '90%',
        height: '5%',
        backgroundColor: color.primary,
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: color.secondary,
        textAlign: 'center',
        verticalAlign: 'middle',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 12,
    },
    iconeNavBar: {
        color: color.secondary,
    }
  });