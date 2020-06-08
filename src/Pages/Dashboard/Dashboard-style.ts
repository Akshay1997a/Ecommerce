import { StyleSheet, Dimensions, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { metrics, colors } from '../../Style'

const width = Dimensions.get("window").width

export const ProductsList = styled(FlatList).attrs({
    contentContainerStyle: {
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.basePadding,
    },
    columnWrapperStyle: {
        //marginHorizontal: metrics.basePadding,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
})``;

export const ProductItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
})`
width: ${(metrics.screenWidth - 50) / 2}px;
margin-top: ${metrics.baseMargin}px;
padding: ${metrics.baseMargin}px;
background-color: ${colors.white};
border-radius: ${metrics.baseRadius}px;
`

export const Image = styled.Image.attrs({
    resizeMode: "contain"
})`
width: ${(metrics.screenWidth - 50) / 2}px;
height: ${(metrics.screenWidth - 50) / 2}px;
`

export const Name = styled.Text`
font-size: 18px;
font-weight: bold;
`
export const Brand = styled.Text`
font-size: 12px;
color: gray;
`

export const Price = styled.Text`
font-size: 16px;
color: green
`
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    col1: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        //alignItems: 'center'
    },
    col2: {
        flexDirection: 'row',
    },
})

export default style