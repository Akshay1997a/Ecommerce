import styled from 'styled-components/native'
import React from 'react'
import { StyleSheet, View, TouchableNativeFeedbackProps, TouchableNativeFeedback, Text } from 'react-native'
import { metrics, colors } from '../../Style'

export const Container = styled.View`
flex: 1;
background-color: ${colors.white};
padding: 20px;
`

export const Image = styled.Image`
width: ${metrics.screenWidth};
height: ${metrics.screenHeight / 2};
`;

export const Name = styled.Text`
font-size: 28px;
font-weight: bold;
margin-top: 20px;
`
export const Price = styled.Text`
font-size: 18px;
font-weight: bold;
color: green;
margin-top: 20px;
`

export const Button = styled.TouchableOpacity`
margin-top: 20px;
flex-direction: row;
background-color: ${colors.secondary};
justify-content: center;
align-items: center;
bottom: 0px;
`

export const ButtonText = styled.Text`
color: ${colors.white};
padding: 20px;
`

const style = StyleSheet.create({
    imageContainer: {
        width: metrics.screenWidth,
        height: metrics.screenHeight / 2
    },
    but: {
        justifyContent: 'flex-end',
        backgroundColor: colors.secondary
    },
    butText: {
        color: colors.white,
        padding: 20
    }
})

export default style