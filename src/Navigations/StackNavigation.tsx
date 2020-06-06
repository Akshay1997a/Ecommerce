import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Navigations Screen
import GetStarted from '../Components/GetStarted/GetStarted'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Dashboard from '../Components/Dashboard/Dashboard'
import TabNavigator from './TabNavigator'

interface Props { }
interface State { }

class StackNavigation extends Component<Props, State>{
    constructor(props: any) {
        super(props)
    }

    render() {
        const Stack : any = createStackNavigator()
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="GetStarted"
                        component={GetStarted}
                        options={{
                            headerShown: false
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
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default StackNavigation