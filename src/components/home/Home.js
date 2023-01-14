import React, { Component } from 'react';
import { Text, View, BackHandler, Alert } from 'react-native'



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
            <View>
            <Text>aaaaaa</Text>
            </View>
        );
    }
}

export default Home;