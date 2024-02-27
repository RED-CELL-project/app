import { Header, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import color from '../styles/color';
import { useState } from 'react';

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    return (
        <SafeAreaView style = {styles.page}>
            <Header
                paddingTop = {Platform.OS === "android" ? StatusBar.currentHeight : 0}
                backgroundColor = { color.primary }
                centerComponent = {{
                    text: "RED CELL",
                    style: {
                        color: color.secondary,
                        fontSize: 36,
                        fontWeight: "bold",
                    }
                }}
                leftComponent = {
                    <Button
                        buttonStyle = {{
                            width: 60,
                            height: 60,
                            backgroundColor: color.primary
                        }}
                        icon = {<Icon name = "book" size = {40} color = { color.secondary } />}
                        onPress = {() => setVisible(true)}
                    />
                }
            />
            <View style = { visible ? styles.sideBarVisible : styles.sideBarNone}>
                <Text>Bande de nuls</Text>
            </View>
            <Pressable style = { visible ? styles.zoneQuitterClickable : styles.zoneQuitterNone } onPress = {() => setVisible(false)}></Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideBarVisible: {
        backgroundColor: color.accent,
        zIndex: 1,
        height: '100%',
        width: '80%',
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        display: 'block'
    },
    sideBarNone: {
        display: 'none'
      },
    zoneQuitterClickable: {
        backgroundColor: 'black',
        zIndex: 1,
        height: '100%',
        width: '20%',
        position: 'absolute',
        bottom: '0%',
        right: '0%',
        opacity: 0.5
      },
    zoneQuitterNone: {
        display: 'none'
      },
    page: {
        height: '50%',
        width: '100%'
    }
  });  