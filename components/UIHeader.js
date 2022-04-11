import {
    Text,
    View,
} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors, fontSizes } from '../constants'

function UIHeader(props) {
    const {
        title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon
    } = props

    return <View style={{
        height: 55,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        {leftIconName != undefined ? <Icon
            name={leftIconName}
            style={{ padding: 10 }}
            size={20} color={'white'}
            onPress={onPressLeftIcon}
        /> : <View style={{ width: 50, height: 50, }} />}

        <Text style={{
            fontSize: fontSizes.h4,
            alignSelf: 'center',
            lineHeight: 45,
            color: 'white',
        }}>{title}</Text>

        {rightIconName != undefined ? <Icon
            name={rightIconName}
            style={{ padding: 10 }}
            size={20} color={'white'}
            onPress={onPressRightIcon}
        /> : <View style={{ width: 50, height: 50, }} />}
    </View>
}

export default UIHeader