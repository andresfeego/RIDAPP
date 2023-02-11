import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { List, TextInput } from 'react-native-paper';
import colors from '../../../res/colors';
import { stylesForm } from '../../../res/EstilosFormularios';
import GoBackBar from '../../generalComponent/GoBackBar';
import { type } from '../../home/header/components/BotonMenu';
import Boton from '../../../res/RidButton';


class NuevoUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securePass: true
    };
  }

  render() {
    return (
      <View style={styles.botonMenu}>
        <GoBackBar name='Registro de reportante' icon='scan-circle' type={type.Ionicons} color={colors.white} navigation={this.props.navigation} />
        <View style={styles.icono}>
        <Boton Icono='adduser' typoDeicono={type.AntDesign} colorP={colors.white} />
        </View>

        <TextInput
          style={[stylesForm.generalInput, { width: '93%' }]}
          label="Nombre"
        />

          <TextInput
            style={[stylesForm.generalInput,{ width: '93%' }]}
            label="Primer Apellido"
          />

          <TextInput
            style={[stylesForm.generalInput, { width: '93%' }]}
            label="Segundo Apellido"
          />
      
        <List.Accordion
          style={ {backgroundColor: colors.gray9 , width: 364 }}
          title="Tipo de documento"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={true}
        >
          <List.Item title="Tarjeta de identidad" />
          <List.Item title="Cedula de ciudadania" />
          <List.Item title="Cedula de extrajeria" />
        </List.Accordion>

          <TextInput
            style={[stylesForm.generalInput, { width: '93%',marginTop: 20 }]}
            label="Numero de documento"
          />
        
          <TextInput
            style={[stylesForm.generalInput,{ width: '93%' }]}
            label="Email"
          />
          

        <TextInput
          style={[stylesForm.generalInput, { width: '93%' }]}
          label="Contraseña"
          secureTextEntry={this.state.securePass}
          right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({

  botonMenu: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',

  },
  icono:{
    marginBottom: 20
  }


})


export default NuevoUsuario;
