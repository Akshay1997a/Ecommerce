import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from '../GetStarted/GetStarted-style'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

interface Props {
    navigation: any
}

interface State {}

export class GetStarted extends Component<Props, State> {
    render() {
        return (
            <View style={style.container}>
                <View style={style.col2}>
                    <View style={style.but}>
                        <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate("Login")}>
                            <View>
                                <Text style={style.butText}>Get Started</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        )
    }
}

export default GetStarted
