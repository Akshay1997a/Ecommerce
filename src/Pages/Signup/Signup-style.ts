import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../Style'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    col1: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    col2: {
        width: '100%',
        padding: 50,
        alignItems: 'center',
    },
    col3: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    textInput: {
        flex: 1
    },
    but: {
        backgroundColor: colors.secondary,
        overflow: 'hidden',
        width: '100%',
        padding: 10,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    butText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    tncContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default style