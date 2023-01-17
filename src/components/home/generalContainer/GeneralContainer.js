import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GeneralContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> GeneralContainer </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

  }
})

export default GeneralContainer;
