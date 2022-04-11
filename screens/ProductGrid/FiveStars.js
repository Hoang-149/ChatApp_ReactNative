import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

function FiveStars(props) {
    const { numberOfStars } = props
    return <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        {[0, 1, 2, 3, 4].map(item => <Icon
            name='star'
            style={{ marginEnd: 2 }}
            size={10} color={item <= numberOfStars - 1 ? 'orange' : colors.inactive} />)}

    </View>
}

export default FiveStars