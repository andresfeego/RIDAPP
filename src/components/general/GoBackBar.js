import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../res/colors';


class GoBackBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { name } = this.props
        return (
            <View style={styles.back}>
                <Pressable style={styles.iconBack} onPress={() => this.props.navigation.goBack()}>
                    <Icon size={30}  name='arrow-back' color={colors.white}></Icon>
                </Pressable>
                    <Text style={styles.textBack}> {name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    back: {
        height: 50,
        width: '100%',
        display: 'flex',
        backgroundColor: colors.primary,
        flexDirection: 'row',
    },
    iconBack: {
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    textBack: {
        fontSize: 20,
        justifyContent: 'center',
        textAlignVertical: 'center',
        color: colors.white
    }
})

export default GoBackBar;
