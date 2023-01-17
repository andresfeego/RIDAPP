import React, { Component } from 'react';
import { Text, View, BackHandler, Alert, StyleSheet } from 'react-native'
import GeneralContainer from './generalContainer/GeneralContainer';
import Header from '../home/header/Header';


class Home extends Component {

    componentDidMount(){
        console.log('dfgsdfgsdfg')
        this.BackHandler = BackHandler.addEventListener('hadwareBackPress', this.onBackButtonEvent);
    }

    componentWillUnmount(){
        this.BackHandler.remove();
    }    

    onBackButtonEvent = () =>{
        BackHandler.exitApp()
          return true;
            }

    render() {


        return (
            <View style={styles.container}>
                <Header/>
                <GeneralContainer/>
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

export default Home;