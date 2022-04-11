import {
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

function ChatItem(props) {
    let {
        name,
        url,
        Message,
        numberOfUnreadMessages,
        userId
    } = props.user // destructuring an object
    const { onPress } = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            height: 80,
            paddingStart: 10,
            paddingTop: 20,
            flexDirection: 'row',
        }}>
        <View>
            <Image
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 25,
                    marginRight: 12,
                    marginStart: 10,
                }}
                source={{
                    uri: url,
                }} />
            {numberOfUnreadMessages > 0 && <Text style={{
                position: 'absolute',
                backgroundColor: 'red',
                right: 10,
                fontSize: fontSizes.h6 * 0.8,
                color: 'white',
                paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
                borderRadius: 10,
            }}>{numberOfUnreadMessages}</Text>}
        </View>
        <View style={{
            flexDirection: 'column'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5,
                fontWeight: 'bold'
            }}>{name}</Text>

            <Text style={{
                color: 'black',
                fontSize: fontSizes.h5,
                marginTop: 5
            }}>{Message}</Text>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h6 * 0.8,
                marginRight: 10,
            }}>
                4 minutes ago
            </Text>
        </View>

    </TouchableOpacity>
}

export default ChatItem