import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ScrollView,
    Switch
} from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components'
import { auth, firebaseDatabase, firebaseref } from '../firebase/firebase'
import { StackActions } from '@react-navigation/native'

function Settings(props) {

    const [isEnabledLockApp, setisEnabledLockApp] = useState(true)
    const [isEnabledChangePassword, setisEnabledChangePassword] = useState(true)
    const [isEnabledFingerprint, setisEnabledFingerprint] = useState(false)

    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation


    return <View style={{
        flex: 1,
    }}>
        <UIHeader title={"Settings"} />
        <ScrollView>
            <View style={{
                height: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Common</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="globe"
                    style={{ marginStart: 10 }}
                    size={18}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Language</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>English</Text>

                <Icon name="chevron-right"
                    style={{ marginEnd: 10 }}
                    size={16}
                    color={colors.inactive} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="cloud"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Enviroment</Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>Production</Text>

                <Icon name="chevron-right"
                    style={{ marginEnd: 10 }}
                    size={16}
                    color={colors.inactive} />
            </View>

            <View style={{
                height: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Account</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="phone"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Phone number</Text>
                <View style={{ flex: 1 }} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="envelope"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Email</Text>
                <View style={{ flex: 1 }} />
            </View>
            <TouchableOpacity style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}
                onPress={() => {
                    auth.signOut()
                    navigation.dispatch(StackActions.popToTop())
                }}>
                <Icon name="sign-out-alt"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Sign out</Text>
                <View style={{ flex: 1 }} />
            </TouchableOpacity>

            <View style={{
                height: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Security</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="door-closed"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Lock app in background</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setisEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="fingerprint"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Use fingerprint</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledFingerprint ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setisEnabledFingerprint(!isEnabledFingerprint)
                    }}
                    value={isEnabledFingerprint}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="lock"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Change Password</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setisEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                />
            </View>
            <View style={{
                height: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                justifyContent: 'center',

            }}>
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Misc</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="passport"
                    style={{ marginStart: 10 }}
                    size={18}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Term of Service</Text>
                <View style={{ flex: 1 }} />

                <Icon name="chevron-right"
                    style={{ marginEnd: 10 }}
                    size={16}
                    color={colors.inactive} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon name="cloud"
                    style={{ marginStart: 10 }}
                    size={16}
                    color={'black'} />

                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10
                }}>Open source licenses</Text>
                <View style={{ flex: 1 }} />

                <Icon name="chevron-right"
                    style={{ marginEnd: 10 }}
                    size={16}
                    color={colors.inactive} />
            </View>
        </ScrollView>
    </View>
}

export default Settings