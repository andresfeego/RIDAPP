import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GeneralMenu from './components/GeneralMenu';
import { connect } from 'react-redux';
import BotonMenu, { type } from '../header/components/BotonMenu';
import { validaPermisosInterface } from '../../../res/validatorsForms';

const buttons = [

  {
    nombre: "Boton 1",
    icon: 'weather-lightning-rainy',
    idMenu: 1,
    type: type.MaterialCommunityIcons,
    idInterface: 2

  },
  {
    nombre: "Boton 2",
    icon: 'tasks',
    idMenu: 2,
    type: type.FontAwesome5,
    idInterface: 3

  },
  {
    nombre: "Boton 3",
    icon: 'home',
    idMenu: 3,
    type: type.AntDesign,
    idInterface: 4

  },
  {
    nombre: "Boton 3",
    icon: 'alert-triangle',
    idMenu: 4,
    type: type.Feather,
    idInterface: 5

  },
  {
    nombre: "Boton 3",
    icon: 'notification',
    idMenu: 5,
    type: type.AntDesign,
    idInterface: 6

  }
]
class GeneralContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMenu: 1,
      activeButtons: []
    };
  }

  componentDidMount() {
    this.filterActiveButtons(this.props.usuario.roles).then((activeButtons) => {
      this.setState({
        activeButtons: activeButtons
      })
    })
  }

  async filterActiveButtons(roles) {
    return new Promise(async (resolve, reject) => {
      var activeButtons = []
      await Promise.all(
        buttons.map(async (button) => {
          button['permiso'] = await validaPermisosInterface(button.idInterface, roles)
x          if (button.permiso) {
            activeButtons.push(button)
          }
        })
      )
      resolve(activeButtons)
    })

  }

  cambiaMenu(idMenu) {
    this.setState({
      idMenu: idMenu
    })
  }

  renderContenido() {
    switch (this.state.idMenu) {
      case 1:
        return (<Text style={styles.text}> PRONOSTICO </Text>)
        break;

      case 2:
        return (<Text style={styles.text}> TAREAS </Text>)
        break;

      case 3:
        return (<Text style={styles.text}> HOME </Text>)
        break;

      case 4:
        return (<Text style={styles.text}> REPORTES </Text>)
        break;

      case 5:
        return (<Text style={styles.text}> NOTICIAS </Text>)
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContenido()}
        {this.state.activeButtons.length > 0 ? 
        <GeneralMenu generalContainer={this} activeButtons={this.state.activeButtons} />
      : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1
  },
  text: {
    fontSize: 50
  }
})

const mapStateToProps = (state) => {
  return {
    usuario: state.usuario
  }
}
export default connect(mapStateToProps)(GeneralContainer);

