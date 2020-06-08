import 'react-native-gesture-handler'
import React, { Component } from 'react'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { colors } from '../Style'

//Components
import Dashboard from '../Pages/Dashboard/Dashboard'
import Cart from '../Pages/Cart/Cart'
import Settings from '../Pages/Settings/Settings'

function TabNavigator() {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: colors.secondary
            }}
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
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: () => (
                        <FontAwsome name="shopping-cart" size={30} color="#fff" />
                    )
                }}
            />
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