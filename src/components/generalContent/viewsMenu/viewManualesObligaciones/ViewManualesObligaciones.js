import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../../res/colors';
import GoBackBar from '../../../generalComponent/GoBackBar';
import { type } from '../../../home/header/components/BotonMenu';

class ViewManualesObligaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Manuales Obligaciones' icon='book' type={type.FontAwesome} color={colors.white} navigation={this.props.navigation} />
        <Text style={styles.text}> Manuales Obligaciones </Text>
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


export default ViewManualesObligaciones;
