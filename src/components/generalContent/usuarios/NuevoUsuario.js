import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import colors from '../../../res/colors';
import { stylesForm } from '../../../res/EstilosFormularios';
import GoBackBar from '../../generalComponent/GoBackBar';
import BotonMenu, { type } from '../../home/header/components/BotonMenu';
import DropDown from 'react-native-paper-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

const genderList = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Others",
    value: "others",
  },
];

class NuevoUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      securePass: true,
      showDropDown: false,
      dropValue: ''
    };
  }

  setShowDropDown(showDrop) {
    this.setState({
      showDropDown: showDrop
    })
  }

  setGender(dropValue) {
    this.setState({
      dropValue: dropValue
    })
  }



  render() {
    return (
      <View>
        <GoBackBar name='Registro de reportante' icon='scan-circle' type={type.Ionicons} color={colors.white} navigation={this.props.navigation} />
        <ScrollView>
          <View style={stylesForm.container1col}>
            <View style={styles.containerImgUsuario} onPress={() => this.props.navigationRed.navigate("Home")}>
              <Icon name='user-astronaut' size={70} color={colors.gray4} onPress={() => this.props.navigationRed.navigate("Home")}/>
              
                <IconC name='camera-plus' size={35} style={styles.boton} onPress={() => this.props.navigationRed.navigate("Home")}/>
            </View>

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label="Nombre"
            />

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label="Primer Apellido"
            />

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label="Segundo Apellido"
            />

            <View
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
            >
              <DropDown
                label={"Genero"}
                visible={this.state.showDropDown}
                showDropDown={() => this.setShowDropDown(true)}
                onDismiss={() => this.setShowDropDown(false)}
                value={this.state.dropValue}
                setValue={(value) => this.setGender(value)}
                list={genderList}
                inputProps={{ right: <TextInput.Icon icon={this.state.showDropDown ? "menu-up" : "menu-down"} /> }}

              />

            </View>
            <TextInput
              style={[stylesForm.generalInput, { width: '93%', marginTop: 20 }]}
              label="Numero de documento"
            />

            <TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Email"
            />


            <TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            />
            <TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            /><TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            /><TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            /><TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            /><TextInput
              style={[stylesForm.generalInput, { width: '93%' }]}
              label="Contraseña"
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
            />
          </View>
        </ScrollView>
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
  containerImgUsuario: {
    height: 150,
    width: 150,
    backgroundColor: colors.gray7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginBottom: 20,

  },
  boton: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    elevation: 20,
    color: colors.primary
  },

})

const mapStateToProps = (state) => {
  return {
      navigationRed: state.navigationRed
  }
}


export default connect(mapStateToProps)(NuevoUsuario);