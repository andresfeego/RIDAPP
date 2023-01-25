import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../res/colors';
import GoBackBar from '../../generalComponent/GoBackBar';
import { type } from '../../../components/home/header/components/BotonMenu';

class NuevaTarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Nueva Tarea' icon='add-task' type={type.MaterialIcons} color= {colors.white} navigation={this.props.navigation} />
        <Text style={styles.text}> Nueva Tarea </Text>
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

export default NuevaTarea;