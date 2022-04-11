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
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Welcome, Login, Register, Messenger } from '../screens'
import UITab from './UITab'

const Stack = createNativeStackNavigator()
function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"Welcome"} component={Welcome} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Register"} component={Register} />
            <Stack.Screen name={"UITab"} component={UITab} />
            <Stack.Screen name={"Messenger"} component={Messenger} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default App