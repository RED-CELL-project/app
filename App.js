import { StatusBar } from 'expo-status-bar';
import { Header} from "react-native-elements";
import { Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


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
      icon={<Icon name="book" size={50} color="#FFF" />}
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
  <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 15,
        }}
      >
        <Icon name="save" size={40} color="#900" />
      </View>    
      <View>

      <Text style={{color: '#fff', fontSize: 24}}>Enregistrement</Text>
      </View>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
  <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 15,
        }}
      >
        <Icon name="history" size={40} color="#900" />
      </View> 
      <View>
    <Text style={{color: '#fff', fontSize: 24}}>Historique</Text>
      </View>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
  <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 15,
        }}
      >
        <Icon name="medkit" size={40} color="#900" />
      </View> 
      <View>

    <Text style={{color: '#fff', fontSize: 24}}>Pilulier</Text>
      </View>
  </TouchableOpacity>
  
</View>
<View
  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 80}}
>
  {/* All corners */}
  <TouchableOpacity style={{backgroundColor: '#F1AEAE', padding: 30, borderRadius: 8, width: 300, height: 120, alignItems: 'center', justifyContent: 'center'}}>
  <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 15,
        }}
      >
        <Icon name="book" size={40} color="#900" />
      </View>
      <View>
      <Text style={{color: '#fff', fontSize: 24}}>Tutoriels</Text>

      </View>
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
