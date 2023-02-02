import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import BotonMenu from '../components/home/header/components/BotonMenu';
import colors from './colors';

class Boton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    hexToRgb(hex) {
        const hexCode = hex.charAt(0) === '#' 
                            ? hex.substr(1, 6)
                            : hex;
    
        const hexR = parseInt(hexCode.substr(0, 2), 16);
        const hexG = parseInt(hexCode.substr(2, 2), 16);
        const hexB = parseInt(hexCode.substr(4, 2), 16);
        // Gets the average value of the colors
        const contrastRatio = (hexR + hexG + hexB) / (255 * 3);
    
        return contrastRatio >= 0.5
            ? 'black'
            : 'white';
    }

    render() {

        let { text, Icono, typoDeicono, colorP } = this.props

        let width = 'auto'

        if (text) {
            width = '45%'
        }

        let color = colors.primaryLight

        if (colorP) {
            color = colorP
        }
        return (
            <Pressable style={[styles.boton, { width: width, backgroundColor: color }]} >
                {Icono ?
                    <View style={styles.icono}>
                        <BotonMenu icon={Icono} type={typoDeicono} size={20} color={this.hexToRgb(color)} />
                    </View>
                    :
                    null
                }

                {text ?
                    <Text style={[styles.texto, {color: this.hexToRgb(color)}]}> {text} </Text>
                    :
                    null}
            </Pressable>
        );
    }
}


const styles = StyleSheet.create({

    boton: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        elevation: 2,
        display: 'flex',
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        alignItems: 'center',
        minWidth: 40

    },

    texto: {
        fontSize: 18,
        textAlignVertical: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,

    },

    icono: {
        padding: 5,

    },

})

export default Boton;