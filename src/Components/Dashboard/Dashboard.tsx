import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, Image, Dimensions } from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import items from '../../Assects/items.json'
import style from './Dashboard-style'
import { TextInput } from 'react-native-gesture-handler'

interface Props { }

interface State { }

export class Dashboard extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.col1}>
                    <Text style={style.title}>Welcome</Text>
                </View>
                <FlatList
                    data={items}
                    numColumns={2}
                    maxToRenderPerBatch={10}
                    renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
                />
            </View>
        )
    }
}


const RenderItem = ({ item, index }: any) => {
    let imgPath: string = `../../Assects/images/${item.productImg}`
    let wdth = Dimensions.get("window").width / 2
    return (
        <View style={style.itemContainer}>
            <Image style={{
                borderWidth: 1,
                width: wdth,
                height: wdth
            }} source={imgPath} resizeMode="center"/>
        </View>
    )
}

export default Dashboard
