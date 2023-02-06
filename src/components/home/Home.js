import React, { Component } from 'react';
import { Text, View, BackHandler, Alert, StyleSheet } from 'react-native'
import GeneralContainer from './generalContainer/GeneralContainer';
import Header from '../home/header/Header';
import ButtomFloating from './generalContainer/components/ButtomFloating';
import Boton from '../../res/Boton';
import { type } from './header/components/BotonMenu';
import colors from '../../res/colors';
import { TextInput } from 'react-native-paper';




class Home extends Component {

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
                    style={{ width: '100%'}}
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                    
                />
                <TextInput
                    style={{ width: '100%'}}
                    label="Email"
                />
                <GeneralContainer />
                <ButtomFloating navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home;