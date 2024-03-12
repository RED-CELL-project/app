import { StyleSheet, Text, View } from 'react-native';
import color from '../styles/color';

const iconStrokeWidth = 3;
const iconSize = 30;

export default function Heading(props) {
    
    return(
        <View style={styles.container}>
            <props.icon color={color.neutral} size={iconSize} strokeWidth={iconStrokeWidth}/>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'

    },
    text:{
        fontSize: 32,
        fontWeight: "bold",
        color: color.neutral
    }
});