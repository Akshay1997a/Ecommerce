import { StyleSheet } from 'react-native'
import { secondary } from '../../Constants/Colors'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    col1: {
        flex: 2,
    },
    col2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 100
    },
    but: {
        borderRadius: 20,
        backgroundColor: secondary,
        overflow: 'hidden'
    },
    butText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})

export default style