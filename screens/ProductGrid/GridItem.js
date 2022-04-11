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
import FiveStars from './FiveStars'

function GridItem(props) {
    const { item, index, onPress } = props
    return <View
        style={{
            flex: 0.5,
            // height: 200,
            margin: 5,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.inactive,
        }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
        }}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 16,
                    marginRight: 12,
                }}
                source={{
                    uri: item.url,
                }} />
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3,
            }}>$ {item.price}</Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginTop: 5,
        }}>{item.productName}</Text>
        {item.specification.map(specification =>
            <Text
                style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    paddingHorizontal: 5,
                    paddingBottom: 5,
                }}>*{specification}</Text>
        )}
        <View style={{
            flexDirection: 'row',
        }}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row'
                }}>
                <Icon
                    name='heart'
                    style={{ marginEnd: 5 }}
                    size={20} color={item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red'} />
                <Text
                    style={{
                        color: item.isSaved == undefined || item.isSaved == false ? colors.inactive : 'red',
                        fontSize: fontSizes.h6 * 0.8,
                        width: 50
                    }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,
                marginEnd: 8,
            }}>
                <FiveStars numberOfStars={item.starts} />
                <Text style={{
                    color: colors.success,
                    fontSize: fontSizes.h6 * 0.8,
                    textAlign: 'right'
                }}>{item.reviews} reviews</Text>
            </View>
        </View>
    </View>
}

export default GridItem