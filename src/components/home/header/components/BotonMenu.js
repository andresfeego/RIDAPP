import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';
import colors from '../../../../res/colors';

export const type = {
    Foundation: 'Foundation',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    EvilIconsation: 'EvilIconsation',
    Feather: 'Feather',
    FontAwesome: 'FontAwesome',
    FontAwesome5: 'FontAwesome5',
    FontAwesome5Pro: 'FontAwesome5Pro',
    Fontisto: 'Fontisto',
    Ionicons: 'Ionicons',
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    MaterialIcons: 'MaterialIcons',
    Octicons: 'Octicons',
    SimpleLineIcons: 'SimpleLineIcons',
    Zocial: 'Zocial',
}

class BotonMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderIcon() {

        var iconSize = 28;
        var iconColor = colors.gray;
        let { icon, label, goTo, type } = this.props

        switch (type) {
            case 'Foundation':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFoundation name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'AntDesign':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconAntDesign name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Entypo':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconEntypo name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'EvilIconsation':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconEvilIcons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Feather':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFeather name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'FontAwesome':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFontAwesome name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'FontAwesome5':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFontAwesome5 name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'FontAwesome5Pro':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFontAwesome5Pro name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Fontisto':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconFontisto name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Ionicons':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconIonicons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'MaterialCommunityIcons':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconMaterialCommunityIcons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'MaterialIcons':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconMaterialIcons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Octicons':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconOcticons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'SimpleLineIcons':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconSimpleLineIcons name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            case 'Zocial':
                return (
                    <Pressable style={styles.botonMenu} onPress={() => this.props.navigation.navigate(goTo)} >
                        <IconZocial name={icon} size={iconSize} color={iconColor} style={styles.iconMenu} />
                        <Text style={styles.texMenu}> {label} </Text>
                    </Pressable>
                )
                break;

            default:
                break;
        }

    }

    render() {

        return (
            this.renderIcon()
        );
    }
}
const styles = StyleSheet.create({

    botonMenu: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    texMenu: {
        textAlignVertical: 'center'
    },
    listaMenu: {
        width: '100%',
    },
    iconMenu: {
        paddingHorizontal: 20
    },
})


export default BotonMenu;
