import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import colors from '../../../../res/colors';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ButtomFloating extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  validarDestino(name) {
    console.log(name)

    switch (name) {
      case '1':
        this.props.navigation.navigate('NuevoReporte');
        break;
      case '2':
        this.props.navigation.navigate('NuevaTarea');
        break;

      default:
        this.props.navigation.navigate('ViewMiMunicipio');
        break;
    }
  }


  render() {
    return (
      <FloatingAction
        color={colors.secondary}
        actions={actions}
        onPressItem={name => {
          this.validarDestino(name)
        }}
      />
    );
  }
}


var IconSize = 25;

const actions = [
  {
    text: "Reportar",
    name: "1",
    icon: <IconIonicons name='scan-circle' size={IconSize} color={colors.white} />,
    color: colors.secondary,
    position: 1
  },
  {
    text: "Nueva Tarea",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "2",
    color: colors.secondary,
    position: 2
  },

];

export default ButtomFloating;
