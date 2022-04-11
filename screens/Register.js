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
import React, { useState, useEffect } from 'react'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValiEmail, isValiPassword } from '../utilies/Validations'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabase,
    firebaseref,
    firebaseset,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
} from '../firebase/firebase'

/**
 * 
 */

function Register(props) {
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    // states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    // state to store email and password
    const [email, setEmail] = useState('TranDinh@gmail.com')
    const [password, setPassword] = useState('123456')
    const [retypePassword, setRetypePassword] = useState('123456')
    const isValidationOK = () => email.length > 0 && password.length > 0 && isValiEmail(email) === true && isValiPassword(password) === true && password == retypePassword

    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation

    useEffect(() => {

        // componentDidMount
        Keyboard.addListener('keyboardDidShow', () => {
            // alert('keyboardDidShow')
            setkeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            // alert('keyboardDidHide')
            setkeyboardIsShow(false)

        })
    })
    return <View style={{
        flex: 100,
        backgroundColor: colors.primary
    }}>

        <View style={{
            flex: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: '50%'
            }}>Already have an Account?</Text>

            <Image
                // tinColor = {'red'}
                source={images.mu}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                }}
            />

        </View>

        <View style={{
            flex: 54,
            backgroundColor: 'white',
            padding: 10,
            margin: 10,
            borderRadius: 20,
        }}>
            <View style={{
                marginHorizontal: 14,
            }}>
                <Text style={{
                    fontSize: fontSizes.h4,
                    color: 'orange',
                }}>Email:</Text>

                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValiEmail(text) == true ? '' : 'Email not in correct format')
                        setEmail(text)
                    }}
                    placeholder="example@gmail.com"
                    value={email}
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{ height: 1, width: '100%', marginBottom: 4, marginHorizontal: 15, alignSelf: 'center', backgroundColor: colors.primary }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    marginBottom: 8,
                }}>{errorEmail}</Text>

            </View>
            <View style={{
                marginHorizontal: 14,
            }}>
                <Text style={{
                    fontSize: fontSizes.h4,
                    color: 'orange',
                }}>Password:</Text>

                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValiPassword(text) == true ? '' : 'Password must be at least 3 charaters')
                        setPassword(text)
                    }}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    value={password}
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{ height: 1, width: '100%', marginBottom: 4, marginHorizontal: 15, alignSelf: 'center', backgroundColor: colors.primary }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    marginBottom: 8,
                }}>{errorPassword}</Text>
            </View>

            <View style={{
                marginHorizontal: 14,
            }}>
                <Text style={{
                    fontSize: fontSizes.h4,
                    color: 'orange',
                }}>Confirm Password:</Text>

                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValiPassword(text) == true ? '' : 'Password must be at least 3 charaters')
                        retypePassword(text)
                    }}
                    secureTextEntry={true}
                    value={retypePassword}
                    placeholder="Re-Enter your password"
                    placeholderTextColor={colors.placeholder}
                />
                <View style={{ height: 1, width: '100%', marginBottom: 4, marginHorizontal: 15, alignSelf: 'center', backgroundColor: colors.primary }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                }}>{errorPassword}</Text>
            </View>

            {keyboardIsShow == false && <View style={{
                marginTop: 20
            }}>
                <TouchableOpacity
                    disabled={isValidationOK() == false}
                    onPress={() => {
                        createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                const user = userCredential.user
                                debugger
                                sendEmailVerification(user).then(() => {
                                    console.log('Email verified sent')
                                })

                                navigate('UITab')
                            }).catch((e) => {

                                alert(`Error: ${e.message}`)
                            })
                    }}
                    style={{
                        backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 20,

                    }}>
                    <Text style={{
                        padding: 12,
                        fontSizes: fontSizes.h5,
                        color: 'white',
                    }}>REGISTER</Text>
                </TouchableOpacity>
            </View>}
        </View>

        {keyboardIsShow == false && <View style={{
            flex: 16,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20
            }}>

                <View style={{ height: 1, flex: 1, backgroundColor: 'black' }}>
                </View>
                <Text style={{
                    padding: 8,
                    fontSizes: fontSizes.h4,
                    color: 'black',
                    alignSelf: 'center',
                    marginHorizontal: 5

                }}>Use other methods</Text>
                <View style={{ height: 1, flex: 1, backgroundColor: 'black' }}>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name='facebook' size={34} color={colors.facebook} />
                <View style={{
                    width: 15
                }} />
                <Icon name='google' size={34} color={colors.google} />
            </View>

        </View>}

    </View>
}

export default Register