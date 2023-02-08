import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Pressable, BackHandler, Animated } from 'react-native'
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import colors from '../../res/colors';
import { stylesForm } from '../../res/EstilosFormularios';
import RidButton from '../../res/RidButton';


class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: new Animated.Value(1),
            top: new Animated.Value(150),
            finishAnimated: false,
            opacity: new Animated.Value(0),
            securePass: true

        };
    }

    componentDidMount() {

        this.iniciarAnimacion();

    }

    pulse(num) {
        return new Promise((resolve, reject) => {

            if (num > 0) {

                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 1.1,
                        duration: 500,
                        useNativeDriver: false
                    }
                ).start(() => {
                    Animated.timing(
                        this.state.scale,
                        {
                            toValue: 1,
                            duration: 500,
                            useNativeDriver: false
                        }
                    ).start();

                });

                setTimeout(() => {
                    this.pulse(num - 1).then(() => {
                        resolve()
                    })
                }, 1000);
            } else {
                resolve()
            }

        })
    }


    async iniciarAnimacion() {

        this.pulse(3).then(() => {

            Animated.timing(
                this.state.scale,
                {
                    toValue: 1.3,
                    duration: 500,
                    useNativeDriver: false
                }
            ).start();

            Animated.timing(
                this.state.top,
                {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }
            ).start(() => {
                this.setState({
                    finishAnimated: true,
                    top: new Animated.Value(197)
                })

                Animated.timing(
                    this.state.opacity,
                    {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: false
                    }
                ).start();

            });

        }

        );

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

        var displayForm = this.state.finishAnimated ? 'flex' : 'none';
        var styleImage = this.state.finishAnimated ? [styles.ridLogoNoAni] : [styles.ridLogoAni, { top: this.state.top, transform: [{ scale: this.state.scale }] }];
        var stylesContainerImage = this.state.finishAnimated ? styles.containerImageNoAni : styles.containerImageAni;

        return (
            <View style={styles.container}>

                <View style={stylesContainerImage}>

                    <Animated.Image
                        style={styleImage} resizeMode='contain'
                        source={require('../../assets/LOGO_RID.png')}

                    />
                </View>

                <Animated.View style={[stylesForm.container1col, styles.containerForm, { display: displayForm, opacity: this.state.opacity }]}>
                    <TextInput
                        style={[stylesForm.generalInput, stylesForm.input1Col]}
                        label="Usuario"
                        right={<TextInput.Icon icon="account"  />}

                    />
                    <TextInput
                        style={[stylesForm.generalInput, stylesForm.input1Col]}
                        label="Password"
                        secureTextEntry={this.state.securePass}
                        right={<TextInput.Icon icon="eye" onPress={() => this.setState({ securePass: !this.state.securePass })} />}

                    />
                    <RidButton style={{marginTop: 10}}text='iniciar sesión'  onPress={() => this.props.navigation.navigate("Home")}/>

                    <View style={styles.links}>
                        <Pressable>
                            <Text>
                                Olvide mi contraseña
                            </Text>
                        </Pressable>
                        <Text style={{ color: colors.primary, fontWeight: '800' }}>  |  </Text>
                        <Pressable>
                            <Text>
                                Quiero ser reportante
                            </Text>
                        </Pressable>

                    </View>

                </Animated.View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: colors.gray9
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
    },
    ridLogoAni: {
        height: '20%',
        position: 'relative',

    },
    ridLogoNoAni: {
        height: '20%',
        bottom: '-50%',
        position: 'relative',
        transform: [{ scale: 1.3 }]
    },
    containerImageNoAni: {
        height: '50%',
    },
    containerImageAni: {
        height: '50%',
    },
    containerForm: {
        flex: 1,
    },
    links: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row'
    }

})

export default Splash;
