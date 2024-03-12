import * as FileSystem from 'expo-file-system';
import {React, useState} from 'react';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';
import { StorageAccessFramework } from 'expo-file-system';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import color from '../styles/color';


export default function Extraction_transmission() {
    const [document, setDocument] = useState(null);
    const [settings, setSettings] = useState(null);
    const [bgDB, setBgDB] = useState(null);
    // supprime le path enregistré, que pour la phase dévéloppement
    const deleteFilePath = async () => {
        try {
          await SecureStore.deleteItemAsync('folderPath');
          
        } catch (error) {
          console.error('Error deleting file path from SecureStore:', error);
        }
      };
      // demande la permission et accede au path du ficher qui nous interesse: METERDAT.JS
      // extrait aussi les données dans le fichier
      // à tester en terme de rigidité
      async function requestDirectoryPermission() {
        try {
          // Vérifier le système d'exploitation
          if (Platform.OS === 'android') {
            const savedFolderPath = await SecureStore.getItemAsync('folderPath');
            console.log(savedFolderPath);
            if (savedFolderPath != null){
              
              await FileSystem.copyAsync({from: savedFolderPath, to: FileSystem.cacheDirectory});
              const fileContent = await FileSystem.readAsStringAsync(FileSystem.cacheDirectory + '/METERDAT.JS');
              console.log(fileContent);
            } else {
              // Demander la permission d'accéder au répertoire sur Android
              const result = await StorageAccessFramework.requestDirectoryPermissionsAsync();      // Vérifier le statut de la permission
              console.log(result);
              if (result.granted) {
                // Permission accordée, vous pouvez lire et écrire dans le répertoire
                console.log('Permission granted');
                await FileSystem.copyAsync({from: result.directoryUri, to: FileSystem.cacheDirectory});
                const fileContent = await FileSystem.readAsStringAsync(FileSystem.cacheDirectory + '/METERDAT.JS');
                console.log(fileContent);
                await SecureStore.setItemAsync('folderPath', result.directoryUri);
                // Search for settings and bgDB variables and extract their values
              const settingsMatch = fileContent.match(/var\s+settings\s+=\s+(.*?);/s);
              const bgDBMatch = fileContent.match(/var\s+bgDB+=+(\[.*?\]);/s);
        
                if (settingsMatch && bgDBMatch) {
                  // Extract the settings and bgDB values
                  const extractedSettings = JSON.parse(settingsMatch[1].replace(/'/g, '"'));
                  const extractedBgDB = JSON.parse(bgDBMatch[1].replace(/'/g, '"'));
                  
                  // Set the settings and bgDB states
                  setSettings(extractedSettings);
                  setBgDB(extractedBgDB);
                  console.log(settings);
                  console.log(bgDB);
                  // Set the document state to the selected document
                  setDocument(result.assets[0]);
                  
              }
              } else {
                // Permission refusée, vous ne pouvez pas accéder au répertoire
                console.log('Permission denied');
              }
              
            }
          } else {
      
            // Partie IOS
          
            }
        } catch (error) {
          // Une erreur s'est produite, afficher le message d'erreur
          console.error(error.message);
        }
      }
      
      return (
        <View style={styles.container}>
          <View style={styles.afficheContainer}>
            
          </View>
          <Pressable
            style={styles.button}
            activeOpacity = {0.5}
            onPress={requestDirectoryPermission}>
            <Text style ={styles.text}>{'Envoyez vos données'}</Text>
            </Pressable>

            {/*<Button
        title='delete saved path'
        onPress={deleteFilePath}
      />*/}
    

        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: color.secondary,
        alignItems: 'center',
        padding: 15
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#d33962',
        marginVertical : 200,
      },
      text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      
    });