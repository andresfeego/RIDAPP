import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GoBackBar from '../../general/GoBackBar';

class ViewOrganismos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Organismos' navigation={this.props.navigation} />
        <Text style={styles.text}> Organismos </Text>
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

export default ViewOrganismos;
