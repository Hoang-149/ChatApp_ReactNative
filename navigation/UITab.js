import React, { useState, useEffect } from 'react'
import { Settings, ProductGridView, FoodList, Chat } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()
const screenOptions = (route) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        let iconName = "facebook"
        if (screenName == "ProductGridView") {
            iconName = "align-center"
        }
        else if (screenName == "Chat") {
            iconName = "comment-dots"
        }
        else if (screenName == "FoodList") {
            iconName = "accusoft"
        }
        else if (screenName == "Settings") {
            iconName = "cogs"
        }

        // const iconName = route.name == "ProductGridView" ? "align-center" : (route.name == "FoodList" ? "accusoft" : (route.name == "Settings" ? "cogs" : (route.name == "Chat" ? "comment-dots" : "")))

        return <Icon
            name={iconName}
            size={24}
            color={focused ? 'white' : colors.inactive} />
    }
})

function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={"ProductGridView"}
            component={ProductGridView}
            options={{
                tabBarLabel: 'Products'
            }}
        />
        <Tab.Screen
            name={"Chat"}
            component={Chat}
            options={{
                tabBarLabel: 'Chat'
            }}
        />
        <Tab.Screen
            name={"FoodList"}
            component={FoodList}
            options={{
                tabBarLabel: 'Foods'
            }}
        />
        <Tab.Screen
            name={"Settings"}
            component={Settings}
            options={{
                tabBarLabel: 'Settings'
            }}
        />
    </Tab.Navigator>
}

export default UITab