import { StyleSheet, View, Text, TextInput} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import color from "../styles/color";
import { useState } from "react";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' }
  ];


export default function pilulier() {
    // variables pour le choix du medicament
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // variable pour le choix du dose
    const [dose, setDose] = useState(0);



    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.textStyle}>Médicament:</Text>
            <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            console.log(item.label);
            setIsFocus(false);
          }}
        />

        <Text style={styles.textStyle}>Dose:</Text>
        <TextInput
        style={styles.doseInput}
        placeholder="choisir dose:(en mg)"
        keyboardType="number-pad"
        onChangeText={val => {setDose(val)}}
        />

        <Text style={styles.textStyle}>Heure de Prise:</Text>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15
    },

    inputContainer: {
        backgroundColor: color.primary,
        width: '100%',
        padding: 15,
        borderRadius: 10
    },

    textStyle: {
        color: color.secondary,
        fontSize: 24,
        fontWeight: 'bold'
    },
    dropdown: {
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      doseInput: {
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        fontSize: 16,
        color: 'black'
      }
  });
  