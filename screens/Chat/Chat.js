import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState, useEffect } from 'react'
import { UIHeader } from '../../components'
import ChatItem from './ChatItem'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabase,
    firebaseref,
    firebaseset,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    get,
    child,
    onValue
} from '../../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Chat = (props) => {

    const [users, setUsers] = useState([
        // {
        //     url: 'https://randomuser.me/api/portraits/women/69.jpg',
        //     name: 'Amanda Weler',
        //     Message: 'Hello, how are you?',
        //     numberOfUnreadMessages: 10,

        // },
    ])
    const { navigation, routes } = props
    const { navigate, goBack } = navigation

    useEffect(() => {
        onValue(firebaseref(firebaseDatabase, 'users'), async (snapshot) => {
            if (snapshot.exists()) {
                debugger
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                setUsers(Object.keys(snapshotObject).filter(item => item != myUserId).map(eachKey => {
                    let eachObject = snapshotObject[eachKey]
                    return {
                        // default profile url
                        url: 'https://randomuser.me/api/portraits/women/70.jpg',
                        name: eachObject.email,
                        email: eachObject.email,
                        accessToken: eachObject.accessToken,
                        numberOfUnreadMessages: 0,
                        userId: eachKey,
                    }
                }))
                debugger
            } else {
                console.log('No data available')
            }
        })

    }, [])

    return (
        <View style={{
            flexDirection: 'column',
        }}>
            <UIHeader
                title={"Notification"}
                leftIconName={"arrow-left"}
                rightIconName={"search"}
                onPressLeftIcon={() => {
                    alert('press left icon')
                }}
                onPressRightIcon={() => {
                    alert('press right icon')
                }}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginStart: 10
            }}>
                <Text style={{
                    color: 'black',
                }}> 6 unread messages</Text>
                <Icon
                    name={'search'}
                    style={{ padding: 10 }}
                    size={15} color={'black'}
                    onPress={() => {
                        alert('you pressed Delete')
                    }}
                />
            </View>
            <FlatList
                style={{
                }}
                data={users}
                renderItem={({ item }) => <ChatItem
                    onPress={() => {
                        // alert(`You press item's name: ${item.name}`)
                        navigate('Messenger', { user: item })
                    }}
                    user={item} key={item.url} />}
            />
        </View>
    )
}

export default Chat