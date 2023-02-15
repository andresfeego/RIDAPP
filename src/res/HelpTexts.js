import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './colors';

export const HelpTexts = {
    ayudaEmail: 'Contraseña incorrecta'
}

export const errorText = {
    Email1: 'Formato de mail incorrecto'
}
export const InputHelpTexts = (text, icon,color) => {

    var textComponent;
    var colorText = colors.primary;

    if (color) {
        colorText = color;
    }

    textComponent = <Text key={'text001'} style= {[{color: colorText}]}>{text}</Text>
    var iconComponent = <Icon key={'icon001'} name={icon ? icon : 'alert'} style={[styles.icon,{color: colorText}]}/>;

    return  [iconComponent,textComponent]
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 6,
        padding: 3.5
    },
    })
