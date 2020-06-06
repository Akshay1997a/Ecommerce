import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get("window").width

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    col1: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        //alignItems: 'center'
    },
    col2:{
        flexDirection: 'row'
    },
    title:{
        fontSize: 40,
        color: 'gray',
        fontWeight: 'bold'
    },
    itemContainer: { width: width / 2, height: width / 2, padding: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }
})

export default style