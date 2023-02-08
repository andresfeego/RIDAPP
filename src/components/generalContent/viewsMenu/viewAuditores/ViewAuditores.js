import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../../res/colors';
import GoBackBar from '../../../generalComponent/GoBackBar';
import { type } from '../../../home/header/components/BotonMenu';
import {connect} from 'react-redux';

class ViewAuditores extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <GoBackBar name='Auditores' icon='eye' type={type.FontAwesome5} color= {colors.white} navigation={this.props.navigation} />
        <Text style={styles.text}> Auditores </Text>
        <Text style={styles.text}> {this.props.usuario.id} </Text>
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


const mapStateToProps = (state)=>{
  return{
      usuario: state.usuario
      
  }
}
export default connect(mapStateToProps)(ViewAuditores);


