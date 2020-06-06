import React, { Component } from 'react'
import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, GestureResponderEvent } from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import style from './Signup-style'
import { Checkbox } from 'react-native-paper'
import { TouchableOpacity, TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler'

interface Props {
    navigation: any
}

interface State {
    emailId: string,
    password: string,
    cnfPassword: string,
    passwordVissible: boolean,
    isAgree: boolean,
    errorMsg: string
}


class Signup extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            cnfPassword: '',
            passwordVissible: false,
            isAgree: false,
            errorMsg: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validate() {
        let emailRegx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
        if (!this.state.emailId.match(emailRegx)) {
            this.setState({ errorMsg: 'Invalid Email.' })
            return false
        }
        if (this.state.password.length < 8) {
            this.setState({ errorMsg: 'Password length must contain more than 8 char' })
            return false
        }
        if (this.state.password === this.state.cnfPassword) {
            this.setState({ errorMsg: 'Password not matched' })
            return false
        }
        return true
    }

    handleSubmit = () => {
        try {
            if (this.validate()) {
                alert('all goods')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView>
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
                        <View style={style.inputContainer}>
                            <TextInput
                                style={style.textInput}
                                value={this.state.cnfPassword}
                                onChangeText={text => this.setState({ cnfPassword: text })}
                                placeholder="Confirm Password"
                                secureTextEntry={!this.state.passwordVissible}
                            />
                            <TouchableOpacity onPress={() => this.setState({ passwordVissible: !this.state.passwordVissible })}>
                                <FontAwsome name={this.state.passwordVissible ? "eye-slash" : 'eye'} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={style.tncContainer}>
                            <Checkbox
                                status={this.state.isAgree ? 'checked' : 'unchecked'}
                                onPress={() => this.setState({ isAgree: !this.state.isAgree })}
                            />
                            <Text>Agree terms and conditions.</Text>
                        </View>
                        <TouchableNativeFeedback onPress={this.handleSubmit}>
                            <View style={style.but}>
                                <Text style={style.butText}>Sign up</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={style.col3}>
                        <Text onPress={() => this.props.navigation.navigate("Login")} >Already Have an account?</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Signup
