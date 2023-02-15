import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import colors from '../../../../res/colors';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import { HelpTexts } from '../../../../res/HelpTexts';
import { connect } from 'react-redux';



class ButtomFloating extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  validarDestino(name) {


    switch (name) {

      case '1':
        this.props.navigationRed.navigate('NuevoReporte');
        break;

      case '2':
        this.props.navigationRed.navigate('NuevaTarea');
        break;

      case '3':
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: HelpTexts.ayudaEmail,
          visibilityTime: 2000
        })
        break;
      case '4':
        Toast.show({
          type: 'error',
          text1: 'Hello',
          text2: HelpTexts.ayudaEmail,
          visibilityTime: 2200
        })
        break;

      case '5':
        Toast.show({
          type: 'info',
          text1: 'Hello',
          text2: HelpTexts.ayudaEmail,
          visibilityTime: 2000
        })
        break;

      case '6':
        Toast.show({
          type: 'warn',
          text1: 'Hello',
          text2: HelpTexts.ayudaEmail,
          visibilityTime: 2000
        })
        break;
      case '7':
        Toast.show({
          type: 'help',
          text1: 'Hello',
          text2: HelpTexts.ayudaEmail,
          visibilityTime: 2000
        })
        break;


      default:
        this.props.navigationRed.navigate('ViewMiMunicipio');
        break;
    }
  }


  render() {
    return (
        <FloatingAction
          distanceToEdge={{ vertical: 95, horizontal: 30 }}
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
  {
    text: "Toast ok",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "3",
    color: colors.secondary,
    position: 3
  },
  {
    text: "Toast error",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "4",
    color: colors.secondary,
    position: 4
  },
  {
    text: "Toast info",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "5",
    color: colors.secondary,
    position: 5
  },
  {
    text: "Toast warn",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "6",
    color: colors.secondary,
    position: 6
  },
  {
    text: "Toast help",
    icon: <IconMaterialIcons name='add-task' size={IconSize} color={colors.white} />,
    name: "7",
    color: colors.secondary,
    position: 7
  }

];
const mapStateToProps = (state) => {
  return {
      navigationRed: state.navigationRed
  }
}

export default connect(mapStateToProps)(ButtomFloating);

