import { StatusBar } from 'expo-status-bar';
import { Header, Icon } from "react-native-elements";

import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <Header
    backgroundColor="#F1AEAE"
    backgroundImageStyle={{}}
    barStyle="default"
    centerComponent={{
      text: "RED CELL",
      style: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold"
      }
    }}
    centerContainerStyle={{}}
    containerStyle={{ width: "100%" }}
    leftComponent={{
      icon: "menu",
      color: "#fff",
      size: 50
    }}
    leftContainerStyle={{}}
    placement="center"
    rightContainerStyle={{}}
    statusBarProps={{}}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center' 
  },
});
