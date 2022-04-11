import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    TextInput,
    Keyboard
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useState, useEffect } from 'react'
import { UIHeader } from '../../components'
import MessengerItem from './MessengerItem'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabase,
    firebaseref,
    firebaseset,
    onValue
} from '../../firebase/firebase'

const Messenger = (props) => {

    const [typedText, setTypedText] = useState('')
    const [chatHistory, setChatHistory] = useState([
        // {
        //     url: 'https://randomuser.me/api/portraits/women/69.jpg',
        //     isShowUrl: true,
        //     isSender: true,
        //     messenger: "Hello",
        //     timestamp: '1641654238000'
        // },
    ])
    useEffect(() => {
        onValue(firebaseref(firebaseDatabase, 'chats'), async (snapshot) => {
            if (snapshot.exists()) {
                debugger
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                debugger

                let updateChatHistory = Object.keys(snapshotObject).filter(item => item.includes(myUserId)).map(eachKey => {
                    let eachObject = snapshotObject[eachKey]
                    debugger
                    return {
                        ...eachObject,
                        isSender: eachKey.split('-')[0] == myUserId,

                        url: 'https://randomuser.me/api/portraits/women/30.jpg',
                    }
                }).sort((item1, item2) => item1.timestamp - item2.timestamp)
                for (let i = 0; i < updateChatHistory.length; i++) {
                    let item = updateChatHistory
                    if (i == 0) {
                        item.isShowUrl = true
                    } else {
                        if (item.isSender != updateChatHistory[i].isSender) {
                            item.isShowUrl = false
                        }
                    }
                    // item.isShowUrl = (i == 0) ? true :
                    //     item.isSender != updateChatHistory[i].isSender
                }
                setChatHistory(updateChatHistory)
                debugger
            } else {
                console.log('No data available')
            }
        })

    }, [])
    const { url, name, userId } = props.route.params.user
    const { navigate, goBack } = props.navigation
    return (
        <View style={{
            flexDirection: 'column',
            flex: 1
        }}>
            <UIHeader
                title={name}
                leftIconName={"arrow-left"}
                rightIconName={"ellipsis-v"}
                onPressLeftIcon={() => {
                    goBack()
                }}
                onPressRightIcon={() => {
                    alert('press right icon')
                }}
            />
            <FlatList
                style={{
                    // flex: 1
                }}
                data={chatHistory}
                renderItem={({ item }) => <MessengerItem
                    onPress={() => {
                        alert(`You press item's name: ${item.timestamp}`)
                    }}
                    item={item} key={`${item.timestamp}`} />}
            />
            <View style={{
                height: 50,
                flexDirection: 'row',
                bottom: 0,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TextInput
                    onChangeText={(typedText) => {
                        setTypedText(typedText)
                    }}
                    style={{
                        color: 'black',
                        paddingStart: 10,
                    }}
                    // keyboardType='email'
                    placeholder="Enter your message here"
                    value={typedText}
                    placeholderTextColor={colors.placeholder}
                />
                <TouchableOpacity onPress={async () => {
                    if (typedText.trim().length === 0) {
                        return
                    }

                    debugger
                    let stringUser = await AsyncStorage.getItem("user")
                    let myUserId = JSON.parse(stringUser).userId
                    let myFriendUserId = props.route.params.user.userId
                    // save to firebase DB
                    let newMessageObject = {
                        // fake
                        url: 'https://randomuser.me/api/portraits/women/69.jpg',
                        isShowUrl: false,
                        isSender: true,
                        messenger: typedText,
                        timestamp: (new Date()).getTime(),
                    }
                    Keyboard.dismiss()
                    firebaseset(firebaseref(
                        firebaseDatabase,
                        `chats/${myUserId} - ${myFriendUserId}`
                    ), newMessageObject).then(() => {
                        setTypedText('')
                    })
                    // "id1 - id2": {messenger object}
                }}>
                    <Icon
                        style={{ padding: 10, }}
                        name='paper-plane' size={20} color={colors.facebook} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Messenger