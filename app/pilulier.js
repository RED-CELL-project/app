import { StyleSheet, View, Text, TextInput, Platform, Pressable} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import color from "../styles/color";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from "react-native-gesture-handler";
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

    // variables pour le choix de l'heure
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (e, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let heure = tempDate.getHours() + 'h' + tempDate.getMinutes();
      console.log(currentDate);
    }

    const renderTimeCells = () => {
      const cells = [];
      for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
          cells.push(
            <Pressable key={time} style={styles.timeCell} onPress={() => {console.log(time)}}>
              <Text style={styles.timeText}>{time}</Text>
            </Pressable>
          );
        }
      }
      return cells;
    };

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.headersStyle}>Médicament:</Text>
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

            <Text style={styles.headersStyle}>Dose:</Text>
            <TextInput
            style={styles.doseInput}
            placeholder="choisir dose:(en mg)"
            placeholderTextColor={'black'}
            keyboardType="number-pad"
            onChangeText={val => {setDose(val)}}
            />

            <Text style={styles.headersStyle}>Heure(s) de Prise:</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.heuresListe}>
                {renderTimeCells()}
            </ScrollView>
            
            <Pressable style={styles.ajouterContainer}>
              <Text style={styles.ajouterText}>ajouter</Text>
            </Pressable>
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

    headersStyle: {
        color: color.primary_content,
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
        fontSize: 16
      },
      heureInput: {
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 5,
        fontSize: 20,
        color: 'black'
      },
      heuresListe: {
        marginVertical: 10
      },
      timeCell: {
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.secondary,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 30,
      },
      timeText: {
        fontSize: 16,
        color: color.secondary_content
      },
      ajouterContainer: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: color.secondary,
        borderRadius: 10
      },
      ajouterText: {
        color: color.secondary_content,
        fontSize: 20,
        fontWeight: '500'
      }
  });
  