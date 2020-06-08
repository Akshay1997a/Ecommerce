import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Navigations Screen
import GetStarted from '../Pages/GetStarted/GetStarted'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Dashboard from '../Pages/Dashboard/Dashboard'
import TabNavigator from './TabNavigator'
import ProductView from '../Pages/ProductView/ProductView'
import ProductBuy from '../Pages/ProductView/ProductBuy'
import { colors } from '../Style'

interface Props { }
interface State { }

interface Product {
    id: number,
    name: string,
    brand: string,
    image: string,
    price: string,
}

type RootStackParams = {
    GetStarted: undefined,
    Signup: undefined,
    Login: undefined,
    Home: undefined,
    ProductView: Product,
    ProductBuy: Product
}


class StackNavigation extends Component<Props, State>{
    constructor(props: any) {
        super(props)
    }

    render() {
        const Stack = createStackNavigator<RootStackParams>()
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="GetStarted"
                        component={GetStarted}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="ProductView"
                        component={ProductView}
                        options={{
                            headerTintColor: colors.white,
                            headerTitleStyle: {
                                color: colors.white,
                            },
                            headerStyle: {
                                backgroundColor: colors.secondary
                            },
                            headerShown: !false,
                        }}
                    />
                    <Stack.Screen
                        name="ProductBuy"
                        component={ProductBuy}
                        options={{
                            headerTintColor: colors.white,
                            headerTitleStyle: {
                                color: colors.white,
                            },
                            headerStyle: {
                                backgroundColor: colors.secondary
                            },
                            headerShown: !false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default StackNavigation