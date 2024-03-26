import { StyleSheet, Text, View } from 'react-native';
import color from '../styles/color';

export default function DrugRectangle(drug) {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 150,
        borderRadius: 5,
        backgroundColor: color.secondary
    }
});