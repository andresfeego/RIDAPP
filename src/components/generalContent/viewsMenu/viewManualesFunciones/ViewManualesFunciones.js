import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../../res/colors';
import GoBackBar from '../../../generalComponent/GoBackBar';
import { type } from '../../../home/header/components/BotonMenu';

class ViewManualesFunciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Manuales Funciones' icon='book' type={type.Entypo} color={colors.white} navigation={this.props.navigation} />
        <Text style={styles.text}> Manuales Funciones </Text>
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
    fontSize: 30,
    alignSelf: 'center',
  }
})

export default ViewManualesFunciones;
