import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'
import { colors, metrics } from '../../Style'
import FontAwsome from 'react-native-vector-icons/FontAwesome'

export const AppName = styled.Text`
font-size: 20px;
font-weight: bold;
color: ${colors.white};
padding: 20px;
`

export const SearchIcon = styled(FontAwsome).attrs({
    name: 'search',
    size: 25,
    color: colors.gray
})``

export const ClearIcon = styled(FontAwsome).attrs({
    name: 'close',
    size: 25,
    color: colors.gray
})``

const style = StyleSheet.create({
    container:{
        width: metrics.screenWidth,
        //height: 150,
        backgroundColor: colors.secondary,
    },
    col1:{

    },
    col2:{
        alignItems: 'center'
    },
    col3:{
        marginTop: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        width: metrics.screenWidth - metrics.basePadding*2,
        paddingHorizontal: metrics.basePadding,
    },
    inputText:{
        flex: 1,
        fontSize: 18,
        paddingHorizontal: metrics.basePadding,
    },
    but:{
        borderBottomWidth: 3,
        borderBottomColor: colors.s_dark
    },
    butText:{
        color: colors.white,
        fontSize: 14,
        fontWeight: "500",
        padding: 10,
        paddingHorizontal: 20
    }
})

export default style