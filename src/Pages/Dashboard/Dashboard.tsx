import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, Dimensions } from 'react-native'
import style, { ProductsList, Image, Brand, Price, Name, ProductItem } from './Dashboard-style'
import { Header } from '../../Components/Header/Header'
import PlaceholderLoading from '../../Components/PlaceholderLoading'
import { getCatagories, getProductList } from '../../Network/StoreAPI'

interface Props {
    navigation?: any
}

interface State {
    isLoading: boolean,
    productList?: any
}

export class Dashboard extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLoading: true,
            productList: []
        }
    }

    componentDidMount() {
        this.getProductList()
    }

    getProductList = async () => {
        try {
            let res = await getProductList()
            if (res.status != 200) throw res.data
            this.setState({ productList: res.data, isLoading: false })
        } catch (error) {
            console.log(error)
        }
    }


    _renderProduct = ({ item, index }: any) => {
        const { navigate } = this.props.navigation
        return (
            <ProductItem key={index} onPress={() => navigate("ProductView", { product: item })}>
                <Image source={{ uri: item.image }} />
                <Name>{item.name}</Name>
                <Brand>{item.brand}</Brand>
                <Price>{"$" + item.price}</Price>
            </ProductItem>
        )
    }

    render() {
        const { isLoading, productList } = this.state
        return (
            <View style={style.container}>
                <Header />
                <PlaceholderLoading isLoading={isLoading} />
                <View style={style.col2}>
                    <ProductsList
                        style={{ alignContent: 'space-between' }}
                        keyExtractor={(item: any) => item.id}
                        data={productList}
                        numColumns={2}
                        renderItem={({ item, index }: any) => this._renderProduct({ item, index })}
                    />
                </View>
            </View>
        )
    }
}

export default Dashboard
