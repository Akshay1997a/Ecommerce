import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'

interface Props { }

interface State {
    hasError: boolean,
    error?: any
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true,
            error: error
        }
    }

    componentDidCatch() {
        Alert.alert("Error!", "Sorry for inconvinient cause", [{ text: "OK", style: "default" }])
        console.log(this.state.error)
    }

    render() {
        const { hasError } = this.state
        if (hasError) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                </View>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary