import React, { Component, useState } from 'react'
import { PlaceholderMedia, Placeholder, PlaceholderLine, Fade, Shine } from 'rn-placeholder'
import { Text, View } from 'react-native'
import { PlaceholderView } from './Placeholder-style'

interface PlaceholderInterface {
    isLoading: boolean
}

export const PlaceholderLoading = ({ isLoading }: PlaceholderInterface) => {
    if(!isLoading){
        return <View/>
    }
    return (
        <View style={{ flex: 1 }}>
            <Placeholder style={{ flex: 1 }} Animation={Fade}>
                <PlaceholderView>
                    <PlaceholderMedia size={160} />
                    <PlaceholderMedia size={160} />
                    <PlaceholderMedia size={160} />
                    <PlaceholderMedia size={160} />
                    <PlaceholderMedia size={160} />
                    <PlaceholderMedia size={160} />
                </PlaceholderView>
            </Placeholder>
        </View>
    )
}

export default PlaceholderLoading