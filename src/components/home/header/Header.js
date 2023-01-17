import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors  from '../../../res/colors';
import MenuHeader from './components/MenuHeader';

class Header extends Component {
  
  
  render() {
    return (
      <View style={styles.container}>
        <MenuHeader navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    zIndex: 1000
  }
})

export default Header;
