import {
    Text,
    View,
    Image,
    ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { images, icons, colors, fontSizes } from '../constants'
import { UIButton } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabase,
    firebaseref,
    firebaseset
} from '../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Welcome(props) {
    // state => when a state is changed => UI is reload

    // like getter/ setter
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])

    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation

    useEffect(() => {
        onAuthStateChanged(auth, (responseUser) => {
            debugger
            if (responseUser) {
                // save data to firebase
                let user = {
                    userId: responseUser.uid,
                    email: responseUser.email,
                    emailVerified: responseUser.emailVerified,
                    accessToken: responseUser.accessToken,
                }
                firebaseset(firebaseref(
                    firebaseDatabase,
                    `users/${responseUser.uid}`
                ), user)
                // save user to lavel storage
                AsyncStorage.setItem("user", JSON.stringify(user))

                navigate('UITab')
            }
        })
    })

    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        <ImageBackground
            source={images.backgroud}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,

            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image
                        source={icons.fire}
                        style={{
                            marginStart: 10,
                            marginRight: 5,
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text style={{
                        color: 'red',
                    }}>HMT.CO</Text>
                    <View style={{ flex: 1 }}></View>
                    <Icon name={'question-circle'}
                        color={'red'}
                        size={20}
                        style={{
                            marginEnd: 10
                        }} />
                    {/* <Image 
                            source={icon.question}
                            style = {{
                                width: 22,
                                height: 22,
                                tintColor: 'red',
                                marginEnd: 10
                            }}
                        /> */}
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ marginBottom: 4, color: 'white', fontSize: 16 }}>Welcome to</Text>
                <Text style={{ marginBottom: 4, color: 'white', fontSize: 20, fontWeight: 'bold' }}>HTM.CO</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>Please select your account type</Text>

            </View>
            <View style={{ flex: 40 }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        })
                        setAccountTypes(newAccountTypes)
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)}

            </View>
            <View style={{ flex: 20, }}>
                <UIButton
                    onPress={() => {
                        navigate('Login')
                    }}
                    title={'Login'.toUpperCase()} />
                <Text style={{
                    color: 'white',
                    fontSize: fontSizes.h5,
                    alignSelf: 'center',
                }}>Want to register new Account ?</Text>


                <Text
                    onPress={() => {
                        navigate('Register')
                    }}
                    style={{
                        color: colors.primary,
                        fontSize: fontSizes.h5,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>Register</Text>
            </View>
        </ImageBackground>
    </View>
}


export default Welcome