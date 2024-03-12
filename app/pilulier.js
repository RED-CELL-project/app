import { StyleSheet, View, Text, TextInput, Platform, Pressable} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import color from "../styles/color";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScrollView } from "react-native-gesture-handler";

const units = [
    { label: 'mg'},
    { label: 'pilule(s)'},
    { label: 'ml'},
    { label: 'goute(s)'}
  ];

const freqs = [
    { label: 'intervalles réguliers'},
    { label: 'jours de la semaine'}
];



  /* code pour un dropdown
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
  
  */

export default function pilulier() {
    // variables pour le choix du medicament
    const [medicament, setMedicament] = useState(null);
    

    // variables pour le choix du dose
    const [dose, setDose] = useState(0);
    const [unit, setUnit] = useState("mg");
    const [isUnitFocus, setIsUnitFocus] = useState(false);

    // variables pour le choix de la frequence
    const [frequence, setFrequence] = useState({
      "per-week":null,
      "every-x-day": null,
      "start-day": null
    });
    const [isFreqFocus, setIsFreqFocus] = useState(false);
    const [chosenFreq, setChosenFreq] = useState("");


    // variable pour le choix de l'heure
    const [heures, setHeures] = useState([]);
    
    // ajoute les heures choisies à la liste heures, enlève si c'est déjà choisi
    const addHeure = (t) => {
      // Check if the time is already selected
      const isHeureChoisi = heures.includes(t);
      // If selected, remove it; otherwise, add it
      setHeures((prevSelectedTimes) =>
        isHeureChoisi
          ? prevSelectedTimes.filter((selectedTime) => selectedTime !== t)
          : [...prevSelectedTimes, t]
      );
    };
    // creation de tout les cases heures
    const renderTimeCells = () => {
      const cells = [];
      for (let hour = 0; hour < 24; hour++) {
        const cell = [];
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
          
          cell.push(
            <Pressable key={time} style={[
              styles.timeCell,
              heures.includes(time) && styles.selectedTimeCell,
            ]} onPress={() => addHeure(time)}>
              <Text style={[styles.timeText, heures.includes(time) && styles.selectedTimeText]}>{time}</Text>
            </Pressable>
          );
        }
        cells.push(
          <View key={hour}>
            {cell[0]}
            {cell[1]}
            {cell[2]}
            {cell[3]}
          </View>
        )
      }
      return cells;
    };

    // prend les données choisies et les met dans un objet resultat
    const ajouterDonnees = () => {
      let resultat = {};

      if (!medicament || !dose || heures.length === 0) {
        // Display error message in console
        console.log("Please fill in all required fields.");
        return; // Exit the function early if any required field is missing
      }

      resultat.medicament = medicament;
      resultat.dose = dose;
      resultat.heures = heures;
      console.log(resultat);
    }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.headersStyle}>Médicament:</Text>
            <TextInput
            style={styles.Input}
            placeholder="entrer médicament"
            onChangeText={val => {setMedicament(val)}}
            />

            <Text style={styles.headersStyle}>Dose:</Text>
            <View style={styles.doseContainer}>
            <TextInput
            style={styles.doseInput}
            placeholder="choisir dose:"
            keyboardType="number-pad"
            onChangeText={val => {setDose(val)}}
            />

            <Dropdown
                style={styles.unitDropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={units}
                
                maxHeight={300}
                labelField="label"
                valueField="value"
                                
                onFocus={() => setIsUnitFocus(true)}
                onBlur={() => setIsUnitFocus(false)}
                onChange={item => {
                    setUnit(item.label);
                    console.log(item.label);
                    setIsUnitFocus(false);
                }}
                />
            </View>

            <Text style={styles.headersStyle}>Fréquence:</Text>
            <Dropdown
                style={styles.freqDropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={freqs}
                
                maxHeight={300}
                labelField="label"
                valueField="value"
                
                
                
                onFocus={() => setIsFreqFocus(true)}
                onBlur={() => setIsFreqFocus(false)}
                onChange={item => {
                    setChosenFreq(item.label);
                    console.log(item.label);
                    setIsFreqFocus(false);
                }}
                />



            <Text style={styles.headersStyle}>Heure(s) de Prise:</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.heuresListe}>
                {renderTimeCells()}
            </ScrollView>
            
            

            <Pressable style={styles.ajouterContainer} onPress={ajouterDonnees}>
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
    
      placeholderStyle: {
        fontSize: 16,
        color: 'gray'
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      Input: {
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        fontSize: 16
      },
      doseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      doseInput: {
        width: '60%',
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        fontSize: 16
      },
      unitDropdown: {
        width: '35%',
        
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      freqDropdown: {
        marginVertical: 10,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      heuresListe: {
        marginVertical: 10
      },
      timeCell: {
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: color.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 30,
      },
      
      selectedTimeCell: {
        backgroundColor: color.accent
      },
      selectedTimeText: {
        color: color.accent_content
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
  