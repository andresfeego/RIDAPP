import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import colors from '../../../res/colors';
import { stylesForm } from '../../../res/EstilosFormularios';
import { HelpTexts, InputHelpTexts, textHelper } from '../../../res/HelpTexts';
import RidButton from '../../generalComponent/RidButton';
import { connect } from 'react-redux';
import { validaPassword, validaUsuario } from '../../../res/validatorsForms';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            securePass: true,
            formulario: {
                usuario: {
                    name: 'usuario',
                    dbName: 'email',
                    error: false,
                    value: '',
                    errorText: '',
                    validator: validaUsuario
                },
                password: {
                    name: 'password',
                    dbName: 'password',
                    error: false,
                    value: '',
                    errorText: '',
                    validator: validaPassword
                }
            }
        };
    }

    onChangeText(name, value) {
        var formAuxi = this.state.formulario;

        formAuxi[name].validator(value).then((res) => {

            formAuxi[name].value = res.text;
            formAuxi[name].error = res.error;
            formAuxi[name].errorText = res.errorText;

            this.setState({
                formulario: formAuxi
            })

        })

    }

    render() {
        return (
            <View style={[stylesForm.container1col]}>
                <TextInput
                    style={[stylesForm.generalInput, stylesForm.input1Col80]}
                    label="Usuario"
                    value={this.state.formulario.usuario.value}
                    right={<TextInput.Icon icon="account" />}
                    onChangeText={(text) => this.onChangeText(this.state.formulario.usuario.name, text)}
                />
                <HelperText style={[stylesForm.input1Col80]} visible={this.state.formulario.usuario.error}> {InputHelpTexts(this.state.formulario.usuario.errorText)} </HelperText>

                <TextInput
                    style={[stylesForm.generalInput, stylesForm.input1Col80]}
                    label="Password"
                    value={this.state.formulario.password.value}
                    secureTextEntry={this.state.securePass}
                    right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
                    onChangeText={(text) => this.onChangeText(this.state.formulario.password.name, text)}
                />
                <HelperText style={[stylesForm.input1Col80]} visible={this.state.formulario.password.error}> {InputHelpTexts(this.state.formulario.password.errorText)} </HelperText>

                <RidButton text='iniciar sesión' onPress={() => this.props.navigationRed.navigate("Home")} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
    },

})

const mapStateToProps = (state) => {
    return {
        navigationRed: state.navigationRed
    }
}

export default connect(mapStateToProps)(Login);
