import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../res/colors';
import GoBackBar from '../../generalComponent/GoBackBar';
import { type } from '../../../components/home/header/components/BotonMenu';

class NuevoReporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Nuevo Reporte' icon='scan-circle' type={type.Ionicons} color= {colors.white} navigation={this.props.navigation} />
        <Text style={styles.text}> Nuevo Reporte </Text>
      </View>    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
  },
  text: {
    fontSize: 50,
    alignSelf: 'center',
  }
})

export default NuevoReporte;