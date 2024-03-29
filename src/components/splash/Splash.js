import React, { Component } from 'react';
import { StyleSheet, View, Animated, Pressable, Text, Dimensions } from 'react-native'
import colors from '../../res/colors';
import { stylesForm } from '../../res/EstilosFormularios';
import Login from '../generalContent/usuarios/Login';
import { connect } from 'react-redux';
import { setNavigationRed } from '../../res/localStore/Actions';


const windowHeight = Dimensions.get('window').height;

class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: new Animated.Value(1),
            top: new Animated.Value(150),
            finishAnimated: false,
            opacity: new Animated.Value(0),
        };
    }

    componentDidMount() {

        this.iniciarAnimacion();
        this.props.setNavigationRed(this.props.navigation);
    }

    componentWillMount

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

        this.pulse(1).then(() => {

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

                    <Login style={[stylesForm.container1col, styles.containerForm]}></Login>

                    <View style={styles.links}>
                        <Pressable>
                            <Text>
                                Olvide mi contraseña
                            </Text>
                        </Pressable>
                        <Text style={{ color: colors.primary, fontWeight: '800' }}>  |  </Text>
                        <Pressable  >
                            <Text onPress={() => this.props.navigation.navigate("NuevoUsuarioRep")}>
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

    links: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - 30
    }

})

const mapStateToProps = (state) => {
    return {
        navigationRid: state.navigationRid
    }
}


const mapDispatchToProps = {
    setNavigationRed
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

