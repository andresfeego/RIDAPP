import React, { Component } from 'react';
import { Text, View, BackHandler, Alert, StyleSheet, Dimensions } from 'react-native'
import GeneralContainer from './generalContainer/GeneralContainer';
import Header from '../home/header/Header';
import ButtomFloating from './generalContainer/components/ButtomFloating';
import Boton from '../../res/RidButton';
import { type } from './header/components/BotonMenu';
import colors from '../../res/colors';
import { TextInput } from 'react-native-paper';
import { stylesForm } from '../../res/EstilosFormularios';
import HelpButton from '../generalComponent/HelpButton';
import { HelpTexts } from '../../res/HelpTexts';

const windowHeight = Dimensions.get('window').height;

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            securePass: true
        };
    };


    componentDidMount() {
        this.BackHandler = BackHandler.addEventListener('hadwareBackPress', this.onBackButtonEvent);
    }

    componentWillUnmount() {
        this.BackHandler.remove();
    }

    onBackButtonEvent = () => {
        BackHandler.exitApp()
        return true;
    }

    render() {


        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <Boton text='ok ok ok' />
                <Boton text='ok ok ok' Icono='home' typoDeicono={type.AntDesign} colorP={colors.white} />
                <Boton Icono='home' typoDeicono={type.AntDesign} colorP={colors.secondaryLight} />
                <TextInput
                    style={[stylesForm.generalInput, stylesForm.input1Col]}
                    label="Password"
                    secureTextEntry={this.state.securePass}
                    right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}

                />
                <View style={stylesForm.container2col}>

                    <TextInput
                        style={[stylesForm.generalInput, stylesForm.input2Col]}
                        label="Email"
                        right={HelpButton("okok", HelpTexts.ayudaEmail, 500)}

                    />
                    <TextInput
                        style={[stylesForm.generalInput, stylesForm.input2Col]}
                        label="Email"
                    />
                </View>
                <ButtomFloating navigation={this.props.navigation} />
                <GeneralContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight
    }
})

export default Home;