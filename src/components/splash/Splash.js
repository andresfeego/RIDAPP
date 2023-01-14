import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Pressable, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


class Splash extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate("Home");
        }, 1500);
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
                    colors={['#FF6600', '#FFCC29', '#FF6600']}
                    style={styles.linearGradient}

                >
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/LOGO1.png')}
                    />

                    {/*  <Pressable onPress={() => this.props.navigation.goBack()}
                        
                        >
                            <Text>atras</Text>
                    </Pressable> */}
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
        width: '50%',
    },
})

export default Splash;
