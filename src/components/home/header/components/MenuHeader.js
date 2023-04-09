import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../res/colors';
import BotonMenu, { type } from './BotonMenu';
import ItemMenuHeader from './ItemMenuHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const offSetHorizontal = windowWidth * 0.8;

class MenuHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false,
      menuAbierto: new Animated.Value(-1 * offSetHorizontal),
      fondoOpacity: new Animated.Value(0),
      verFondo: 'none'
    };
  }

  abirMenu() {
    this.setState({
      abierto: true,
      verFondo: 'flex'
    })

    Animated.timing(
      this.state.menuAbierto,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }
    ).start();

    Animated.timing(
      this.state.fondoOpacity,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }
    ).start();
  }

  cerrarMenu() {
    this.setState({
      abierto: false
    })

    Animated.timing(
      this.state.menuAbierto,
      {
        toValue: (-1 * offSetHorizontal),
        duration: 300,
        useNativeDriver: false
      }
    ).start();

    Animated.timing(
      this.state.fondoOpacity,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }
    ).start();

    setTimeout(() => {
      this.setState({
        verFondo: 'none'
      })
    }, 500);
  }

  render() {

    let { menuAbierto, fondoOpacity, verFondo } = this.state;


    return (
      [
        <Pressable key='menupress' style={styles.menu} onPress={() => this.abirMenu()}>
          <Icon name="menu" size={30} color={colors.white} />
        </Pressable>,

        <Animated.View key='menucontainer' style={[styles.menuContainer, { left: menuAbierto }]}>

          <Pressable style={styles.menuClose} onPress={() => this.cerrarMenu()} >
            <Icon name="close" size={30} color={colors.white} />
          </Pressable>

          <View style={styles.header}>
            <Pressable >
              <Icon name="account-circle" size={60} color={colors.white} />
            </Pressable>
            <Text>¡HOLA JULIAN! </Text>
            <Text>Julian*****@gmail.com </Text>
          </View>

          <View style={styles.listaMenu}>
            
            <ItemMenuHeader  type={type.Foundation} icon='map' label={'Mi Municipio'} goTo={'ViewMiMunicipio'} idInterface={1} ></ItemMenuHeader>
            <BotonMenu  type={type.SimpleLineIcons} icon='puzzle' label={'Dependencias'} goTo={'ViewDependencias'}></BotonMenu>
            <BotonMenu  type={type.MaterialCommunityIcons} icon='police-badge-outline' label={'Organismos'} goTo={'ViewOrganismos'}></BotonMenu>
            <BotonMenu  type={type.FontAwesome5} icon='eye' label={'Auditores'} goTo={'ViewAuditores'}></BotonMenu>
            <BotonMenu  type={type.FontAwesome5} icon='user-astronaut' label={'Reportantes'} goTo={'ViewReportantes'}></BotonMenu>
            <BotonMenu  type={type.Entypo} icon='book' label={'Manuales funciones'} goTo={'ViewManualesFunciones'}></BotonMenu>
            <BotonMenu  type={type.FontAwesome} icon='book' label={'Manuales obligaciones'} goTo={'ViewManualesObligaciones'}></BotonMenu>
           
          </View>

        </Animated.View>,

        <Animated.View key='fondoMenu' style={[styles.fondoMenu, { display: verFondo, opacity: fondoOpacity }]} onPress={() => this.cerrarMenu()} >
          <Pressable style={[styles.fondoMenu,{backgroundColor: 'none'}]} onPress={() => this.cerrarMenu()} />
        </Animated.View>
      ]
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    alignSelf: 'flex-start',
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    width: offSetHorizontal,
    height: windowHeight,
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1,
    display: 'flex'
  },
  menuClose: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    height: 150,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingTop: 25
  },
  fondoMenu: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.85)',
    top: 0,
    left: 0,
  },
  botonMenu: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  texMenu: {
    textAlignVertical: 'center'
  },
  listaMenu: {
    width: '100%',
  },
  iconMenu: {
    paddingHorizontal: 20
  },
})


export default MenuHeader;
