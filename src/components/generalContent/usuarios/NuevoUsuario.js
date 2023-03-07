import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { HelperText, Menu, TextInput } from 'react-native-paper';
import colors from '../../../res/colors';
import { stylesForm } from '../../../res/EstilosFormularios';
import GoBackBar from '../../generalComponent/GoBackBar';
import BotonMenu, { type } from '../../home/header/components/BotonMenu';
import DropDown from 'react-native-paper-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconC from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ImagePicker from "react-native-image-crop-picker";
import { validaCelular, validaDocumento, validaGenero, validaImgUrl, validaMail, validaName, validaPassword, validaTipoDocumento, validaTipoGenero } from '../../../res/validatorsForms';
import { HelpTexts, InputHelpTexts } from '../../../res/HelpTexts';
import { getTiposDocumento, getTiposGenero } from '../../../res/GetDB';
import Boton from '../../generalComponent/RidButton';
import { Switch } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { agregarUsuario } from '../../../res/SetDB';

class NuevoUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      showCameraMenu: false,
      securePass: true,
      dropValue: '',
      formularioErrors: false,


      formulario: {
        imgUrl: {
          name: 'imgUrl',
          label: 'Imagen',
          dbName: 'imgUrl',
          file: '',
          error: false,
          value: '',
          errorText: '',
          validator: validaImgUrl
        },
        nombre: {
          name: 'nombre',
          label: 'Nombres',
          dbName: 'nombres',
          error: false,
          value: '',
          errorText: '',
          validator: validaName
        },
        apellido: {
          name: 'apellido',
          label: 'Apellidos',
          dbName: 'apellidos',
          error: false,
          value: '',
          errorText: '',
          validator: validaName
        },
        tipoDeDocumento: {
          name: 'tipoDeDocumento',
          label: 'Tipo de Documento',
          dbName: 'tipoDocumento',
          error: false,
          listValues: [],
          visible: false,
          value: '',
          errorText: '',
          validator: validaTipoDocumento
        },
        documento: {
          name: 'documento',
          label: 'Número de documento',
          dbName: 'id',
          error: false,
          value: '',
          errorText: '',
          validator: validaDocumento
        },
        genero: {
          name: 'genero',
          label: 'Genero',
          dbName: 'genero',
          error: false,
          listValues: [],
          visible: false,
          value: '',
          errorText: '',
          validator: validaGenero
        },
        celular: {
          name: 'celular',
          label: 'Celular',
          dbName: 'celular',
          error: false,
          value: '',
          errorText: '',
          validator: validaCelular,
          wp: true,
        },
        email: {
          name: 'email',
          label: 'Correo',
          dbName: 'email',
          error: false,
          value: '',
          errorText: '',
          validator: validaMail
        },
        password: {
          name: 'password',
          label: 'Contraseña',
          dbName: 'pass',
          error: false,
          value: '',
          errorText: '',
          validator: validaPassword
        }
      }

    };
  }

  async componentDidMount() {
    this.setState({
      formulario: { ...this.state.formulario, tipoDeDocumento: { ...this.state.formulario.tipoDeDocumento, listValues: await getTiposDocumento() }, genero: { ...this.state.formulario.genero, listValues: await getTiposGenero() } }
    })
  }

  cargarImagen(option) {

    this.showMenu(false);

    switch (option) {
      case 'camara':
        ImagePicker.openCamera({
          width: 400,
          height: 400,
          cropping: true
        }).then(image => {
          var formuAuxi = this.state.formulario;
          formuAuxi.imgUrl.file = image;
          this.setState({
            formulario: formuAuxi
          })
        });
        break;

      case 'galeria':
        ImagePicker.openPicker({
          width: 400,
          height: 400,
          cropping: true
        }).then(image => {
          var formuAuxi = this.state.formulario;
          formuAuxi.imgUrl.file = image;
          this.setState({
            formulario: formuAuxi
          })
        });
        break;

      default:
        break;
    }


  }

  showMenu(option) {
    this.setState({
      showCameraMenu: option
    })
  }

  onChangeText(name, value, CB) {
    var formAuxi = this.state.formulario;

    formAuxi[name].validator(value).then((res) => {

      formAuxi[name].value = res.text;
      formAuxi[name].error = res.error;
      formAuxi[name].errorText = res.errorText;

      if (CB) {
        formAuxi[name].visible = false;
      }
      this.setState({
        formulario: formAuxi
      })
    })

  }

  guardar(){
    return new Promise((resolve, reject) => {
      agregarUsuario(this.state.formulario.documento.value, this.state.formulario.nombre.value, this.state.formulario.apellido.value, this.state.formulario.genero.value, this.state.formulario.tipoDeDocumento.value, this.state.formulario.imgUrl.file, this.state.formulario.celular.value, this.state.formulario.celular.wp ? 1: 0, this.state.formulario.email.value, this.state.formulario.password.value).then(() => {
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  }

  validarErrores() {
    return new Promise((resolve, reject) => {
      this.setState({
        formularioErrors: false
      })
      var formAuxi = this.state.formulario;
    for (let index in formAuxi) {
      let value = formAuxi[index].value
      formAuxi[index].validator(value).then((res) => {

        formAuxi[index].error = res.error;
        formAuxi[index].errorText = res.errorText;
        console.log(formAuxi[index].name + ' : ' + res.error)
        this.setState({
          formulario: formAuxi,
          formularioErrors: this.state.formularioErrors || res.error
        })
      })
    }
    resolve()
    })
  }

  submit(){
    
    this.validarErrores().then(() =>{
      console.log('erroresfull: ' + this.state.formularioErrors)
      if (this.state.formularioErrors) {
        
      Toast.show({
        type: 'error',
        text1: 'Hay errores',
        text2: HelpTexts.ValidandoInfo,
        visibilityTime: 5000
      })
      
      } else {
        this.guardar().then(()=> {
          console.log('ok guardar')
        }).catch((err) => {
          console.log('error guardar: ' + err)
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Registro de reportante' icon='scan-circle' type={type.Ionicons} color={colors.white} navigation={this.props.navigation} />
        <ScrollView disableScrollViewPanResponder={true}>
          <View style={stylesForm.container1col}>
            <View style={styles.containerImgUsuario} >
              {this.state.formulario.imgUrl.file ?
                <Image
                  onPress={() => this.showMenu(true)}
                  resizeMode='contain'
                  style={styles.ImgUsuario}
                  source={{ uri: this.state.formulario.imgUrl.file.path }}

                />
                :
                <Icon name='user-astronaut' size={70} color={colors.gray4} onPress={() => this.showMenu(true)} />
              }

              <IconC name='camera-plus' size={35} style={styles.boton} onPress={() => this.showMenu(true)} />


              <Menu
                visible={this.state.showCameraMenu}
                onDismiss={() => this.showMenu(false)}
                anchor={{ x: 250, y: 200 }}>
                <Menu.Item onPress={() => this.cargarImagen('camara')} title="Desde camara" />
                <Menu.Item onPress={() => this.cargarImagen('galeria')} title="Desde Galería" />
              </Menu>

            </View>

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.nombre.label}
              value={this.state.formulario.nombre.value}
              onChangeText={(text) => this.onChangeText(this.state.formulario.nombre.name, text)}
              onBlur={() => this.onChangeText(this.state.formulario.nombre.name, this.state.formulario.nombre.value)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.nombre.error ? 'flex' : 'none' }]} visible={this.state.formulario.nombre.error}> {InputHelpTexts(this.state.formulario.nombre.errorText)} </HelperText>


            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.apellido.label}
              value={this.state.formulario.apellido.value}
              onChangeText={(text) => this.onChangeText(this.state.formulario.apellido.name, text)}
              onBlur={() => this.onChangeText(this.state.formulario.apellido.name, this.state.formulario.apellido.value)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.apellido.error ? 'flex' : 'none' }]} visible={this.state.formulario.apellido.error}> {InputHelpTexts(this.state.formulario.apellido.errorText)} </HelperText>

            <View style={[stylesForm.generalInput, stylesForm.input1Col93]}>
              <DropDown
                label={this.state.formulario.genero.label}
                visible={this.state.formulario.genero.visible}
                showDropDown={() => this.setState({ formulario: { ...this.state.formulario, genero: { ...this.state.formulario.genero, visible: true } } })}
                onDismiss={() => this.setState({ formulario: { ...this.state.formulario, genero: { ...this.state.formulario.genero, visible: false } } })}
                value={this.state.formulario.genero.value}
                setValue={(value) => this.onChangeText(this.state.formulario.genero.name, value, true)}
                list={this.state.formulario.genero.listValues}
                inputProps={{ right: <TextInput.Icon icon={this.state.formulario.genero.visible ? "menu-up" : "menu-down"} /> }}
              />
            </View>
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.genero.error ? 'flex' : 'none' }]} visible={this.state.formulario.genero.error}> {InputHelpTexts(this.state.formulario.genero.errorText)} </HelperText>


            <View style={[stylesForm.generalInput, stylesForm.input1Col93]}>
              <DropDown
                label={this.state.formulario.tipoDeDocumento.label}
                visible={this.state.formulario.tipoDeDocumento.visible}
                showDropDown={() => this.setState({ formulario: { ...this.state.formulario, tipoDeDocumento: { ...this.state.formulario.tipoDeDocumento, visible: true } } })}
                onDismiss={() => this.setState({ formulario: { ...this.state.formulario, tipoDeDocumento: { ...this.state.formulario.tipoDeDocumento, visible: false } } })}
                value={this.state.formulario.tipoDeDocumento.value}
                setValue={(value) => this.onChangeText(this.state.formulario.tipoDeDocumento.name, value, true)}
                list={this.state.formulario.tipoDeDocumento.listValues}
                inputProps={{ right: <TextInput.Icon icon={this.state.formulario.tipoDeDocumento.visible ? "menu-up" : "menu-down"} /> }}
              />
            </View>
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.tipoDeDocumento.error ? 'flex' : 'none' }]} visible={this.state.formulario.tipoDeDocumento.error}> {InputHelpTexts(this.state.formulario.tipoDeDocumento.errorText)} </HelperText>

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.documento.label}
              value={this.state.formulario.documento.value}
              onChangeText={(text) => this.onChangeText(this.state.formulario.documento.name, text)}
              onBlur={() => this.onChangeText(this.state.formulario.documento.name, this.state.formulario.documento.value)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.documento.error ? 'flex' : 'none' }]} visible={this.state.formulario.documento.error}> {InputHelpTexts(this.state.formulario.documento.errorText)} </HelperText>

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.celular.label}
              value={this.state.formulario.celular.value}
              onChangeText={(text) => this.onChangeText(this.state.formulario.celular.name, text)}
              onBlur={() => this.onChangeText(this.state.formulario.celular.name, this.state.formulario.celular.value)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.celular.error ? 'flex' : 'none' }]} visible={this.state.formulario.celular.error}> {InputHelpTexts(this.state.formulario.celular.errorText)} </HelperText>

            {this.state.formulario.celular.value ?
              <View style={[stylesForm.container2col, { marginBottom: 4, }]}>
                <Text>Este telefono tiene Whatsapp</Text>
                <Switch value={this.state.formulario.celular.wp} onValueChange={() => this.setState({ formulario: { ...this.state.formulario, celular: { ...this.state.formulario.celular, wp: !this.state.formulario.celular.wp } } })} />
              </View> :
              null}

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.email.label}
              value={this.state.formulario.email.value}
              onChangeText={(text) => this.onChangeText(this.state.formulario.email.name, text)}
              onBlur={() => this.onChangeText(this.state.formulario.email.name, this.state.formulario.email.value)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.email.error ? 'flex' : 'none' }]} visible={this.state.formulario.email.error}> {InputHelpTexts(this.state.formulario.email.errorText)} </HelperText>

            <TextInput
              style={[stylesForm.generalInput, stylesForm.input1Col93]}
              label={this.state.formulario.password.label}
              value={this.state.formulario.password.value}
              secureTextEntry={this.state.securePass}
              right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}
              onChangeText={(text) => this.onChangeText(this.state.formulario.password.name, text)}
            />
            <HelperText style={[stylesForm.input1Col80, { display: this.state.formulario.password.error ? 'flex' : 'none' }]} visible={this.state.formulario.password.error}> {InputHelpTexts(this.state.formulario.password.errorText)} </HelperText>
            <View style={stylesForm.container2col}>
              <Boton text='Cancelar' Icono='close' typoDeicono={type.AntDesign} onPress={() => this.props.navigation.goBack()} />
              <Boton text='Guardar' Icono='save' typoDeicono={type.Feather} onPress={() => this.submit()} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
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

  ImgUsuario: {
    width: '95%',
    height: '95%',
    borderRadius: 500,
  }

})

const mapStateToProps = (state) => {
  return {
    navigationRed: state.navigationRed
  }
}


export default connect(mapStateToProps)(NuevoUsuario);
