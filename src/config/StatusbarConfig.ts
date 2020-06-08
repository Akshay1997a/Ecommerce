import { StatusBar, Platform } from 'react-native'
import { colors } from '../Style'

StatusBar.setBarStyle("light-content")

if (Platform.OS === "android") {
    StatusBar.setBackgroundColor(colors.secondary)
}