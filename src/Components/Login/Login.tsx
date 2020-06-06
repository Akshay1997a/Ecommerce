import React, { Component } from 'react'
import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, GestureResponderEvent } from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import style from '../Login/Login-style'
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { UserInterface } from '../../Redux/User/UserReducer'
import { userLogin, UserLogin } from '../../Network/userAPIs'

interface Props {
    navigation: any,
    userLogin: any
}

interface State {
    emailId: string,
    password: string,
    passwordVissible: boolean,
    errorMsg?: string
}

class Login extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            passwordVissible: false,
            errorMsg: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async () => {
        try {
            let body: UserLogin = {
                emailId: this.state.emailId,
                password: this.state.password
            }
            let res = await userLogin(body)
            if (res?.status !== 200) throw res?.data
            this.props.userLogin({body})
            const { navigation } = this.props
            navigation.navigate("Home")
        } catch (error) {
            console.log(error)
            this.setState({ errorMsg: error })
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.col1}>
                    <FontAwsome name="shopping-basket" size={100} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Text style={this.state.errorMsg !== "" && { color: 'red' }}>{this.state.errorMsg}</Text>
                </View>
                <View style={style.col2}>
                    <View style={style.inputContainer}>
                        <TextInput
                            style={style.textInput}
                            value={this.state.emailId}
                            onChangeText={text => this.setState({ emailId: text })}
                            placeholder="Email Id"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <TextInput
                            style={style.textInput}
                            value={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder="Password"
                            secureTextEntry={!this.state.passwordVissible}
                        />
                        <TouchableOpacity onPress={() => this.setState({ passwordVissible: !this.state.passwordVissible })}>
                            <FontAwsome name={this.state.passwordVissible ? "eye-slash" : 'eye'} size={20} />
                        </TouchableOpacity>
                    </View>
                    <TouchableNativeFeedback onPress={this.handleSubmit}>
                        <View style={style.but}>
                            <Text style={style.butText}>Sign in</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={style.col3}>
                    <Text onPress={() => this.props.navigation.navigate("Signup")} >Don't Have an account</Text>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        userLogin: (userData: UserInterface) => { dispatch(userData) }
    }
}

export default connect(null, mapDispatchToProps)(Login)
