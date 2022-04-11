import {
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import screenWidth from '../../utilies/Device'

function MessengerItem(props) {

    const { onPress } = props
    const { url, isShowUrl, messenger, timestamp, isSender } = props.item

    return (
        isSender == false ? <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                marginTop: 5,
                alignItems: 'center'
            }}>
            {isShowUrl == true ? <Image
                style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 12,
                    marginStart: 10,
                }}
                source={{
                    uri: url,
                }} /> : <View style={{
                    width: 40,
                    height: 40,
                    marginRight: 12,
                    marginStart: 10,
                }} />}
            <View style={{
                flex: 1,
                flexDirection: 'row',
                // paddingEnd: 15,
            }}>
                <View>
                    <Text style={{
                        color: 'black',
                        fontSize: fontSizes.h5,
                        paddingVertical: 10,
                        paddingHorizontal: 8,
                        borderRadius: 10,
                        backgroundColor: colors.chat
                    }}>
                        {messenger}
                    </Text>
                </View>
                <View style={{ width: 10 }} />
            </View>

        </TouchableOpacity> :
            // isSender = true
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{ width: 20 }} />
                    <View>
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h5,
                            paddingVertical: 10,
                            paddingHorizontal: 8,
                            borderRadius: 10,
                            backgroundColor: colors.chat
                        }}>
                            {messenger}
                        </Text>
                    </View>
                </View>
                {isShowUrl == true ? <Image
                    style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'cover',
                        borderRadius: 20,
                        marginRight: 12,
                        marginStart: 10,
                    }}
                    source={{
                        uri: url,
                    }} /> : <View style={{
                        width: 40,
                        height: 40,
                        marginRight: 12,
                        marginStart: 10,
                    }} />}
            </TouchableOpacity>
    )
}

export default MessengerItem