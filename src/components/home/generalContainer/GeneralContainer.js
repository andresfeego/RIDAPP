import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GeneralMenu from './components/GeneralMenu';

class GeneralContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMenu: 1
    };
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
        <GeneralMenu generalContainer={this} />
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

export default GeneralContainer;
