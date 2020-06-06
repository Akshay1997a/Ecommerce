import 'react-native-gesture-handler/Swipeable'
import React, { Component } from 'react'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

//Components
import Dashboard from '../Components/Dashboard/Dashboard'
import Settings from '../Components/Settings/Settings'

function TabNavigator() {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <Tab.Navigator
            labeled={false} >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: () => (
                        <FontAwsome name="shopping-basket" size={23} color="#fff" />
                    )
                }}
            />
            {/* <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: () => (
                        <FontAwsome name="shopping-basket" size={30} color="#fff" />
                    )
                }}
            /> */}
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcon name="settings" size={24} color="#fff" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator