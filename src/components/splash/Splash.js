import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Pressable, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


class Splash extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate("Home");
        }, 1800);
    }


    render() {



        const chartConfig = {
            backgroundGradientFrom: "#1E29",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };

        return (
            <View style={styles.container}>

                <LinearGradient
                    colors={['#fff', '#fff', '#fff']}
                    style={styles.linearGradient}

                >
                    <Animatable.Image
                        style={styles.tinyLogo} resizeMode='contain'
                        source={require('../../assets/LOGO_RID.png')}
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                    />

                    
                </LinearGradient>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
    },
    tinyLogo: {
        height: 100
    },
})

export default Splash;
