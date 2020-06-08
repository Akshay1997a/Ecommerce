import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style, { Container, Image, Name, Price, Button, ButtonText } from './style'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { metrics, colors } from '../../Style'

interface Props {
    route: any;
    navigation: any;
}

interface State { }

export class ProductView extends Component<Props, State> {
    render() {
        const { navigate } = this.props.navigation
        const { id, name, brand, image, price } = this.props.route.params.product
        return (
            <Container style={{ paddingHorizontal: 30 }}>
                <View style={style.imageContainer}>
                    <Image source={{ uri: image }} resizeMode="contain" />
                </View>
                <Name>{name}</Name>
                <Price>{'$ ' + price}</Price>
                <Button onPress={() => navigate("ProductBuy")}>
                    <FontAwsome name="shopping-cart" size={25} color={colors.white} />
                    <ButtonText>Add to cart</ButtonText>
                </Button>
            </Container>
        )
    }
}

export default ProductView