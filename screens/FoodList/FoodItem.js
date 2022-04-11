import {
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
}from 'react-native'
import {images, colors, icons, fontSizes} from '../../constants'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

function _getColorFromStatus(status) {
    // if(status.toLowerCase().trim() == 'opening now'){
    //     return colors.success
    // }else if(status.toLowerCase().trim() == 'closing soon'){
    //     return colors.alert
    // }else if(status.toLowerCase().trim() == 'coming soon'){
    //     return colors.warning
    // }
    // return colors.success
    return status.toLowerCase().trim() == 'opening now' ? colors.success : (status.toLowerCase().trim() == 'closing soon' ? colors.alert : (status.toLowerCase().trim() == 'coming soon' ? colors.warning : colors.success))
}
function FoodItem(props) {
    let {name, price, socialNetwork, status, url, website} 
    = props.food // destructuring an object
    const {onPress} = props
    return  <TouchableOpacity 
    onPress={onPress}
    style={{
        height: 140,
        padding: 10,
        flexDirection: 'row',
    }}>

        <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 6,
                marginRight: 12,
            }}
            source={{
                uri: url,
        }} />

        <View style={{
            flex: 1,
        }}>

            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                fontWeight: 'bold',
            }}>{name}</Text>

            <View style={{
                height: 1,
                backgroundColor: 'black',

            }} />

            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>Status: </Text>
                
                <Text style={{
                    color: _getColorFromStatus(status),
                    fontSize: fontSizes.h5,
                }}>{status.toUpperCase()}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>Price: </Text>
                
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>{price } $</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>Food type: </Text>
                
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>SPAGHETTI</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>Website: </Text>
                
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5,
                }}>{website}</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                {socialNetwork['facebook'] != undefined &&<Icon style={{paddingEnd: 5}} name='facebook' size={18} color={colors.inactive} />}

                {socialNetwork['twitter'] != undefined && <Icon style={{paddingEnd: 5}} name='twitter' size={18} color={colors.inactive} />}

                {socialNetwork['instagram'] != undefined && <Icon name='instagram' size={18} color={colors.inactive} />}
            </View>

        </View>

    </TouchableOpacity>
}

export default FoodItem