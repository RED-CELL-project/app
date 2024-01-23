import { StatusBar } from 'expo-status-bar';
import { Header, Icon } from "react-native-elements";
import { Button } from "react-native-elements";

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView>

    <Header
    backgroundColor="#F1AEAE"
    backgroundImageStyle={{}}
    barStyle="default"
    centerComponent={{
      text: "RED CELL",
      style: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
      }
    }}
    centerContainerStyle={{}}
    containerStyle={{ width: "100%" }}
    leftComponent={
      <Button
      buttonStyle={{
        width: 60,
        height: 60,
        backgroundColor: "#F1AEAE"
      }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      icon={<Icon name="menu" size={50} color="#FFF" />}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={() => alert("click")}
      titleProps={{}}
    />
}
leftContainerStyle={{width: 50, height: 50}}
placement="center"
rightContainerStyle={{}}
statusBarProps={{}}
/>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#fff', fontSize: 24}}>Enregistrement</Text>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#fff', fontSize: 24}}>Historique</Text>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#fff', fontSize: 24}}>Pilulier</Text>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#fff', fontSize: 24}}>Tutoriels</Text>
  </TouchableOpacity>
  
</View>
  </SafeAreaView>
  


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center' 
  },
});
