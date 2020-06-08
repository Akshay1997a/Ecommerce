import React, { Component } from 'react'
import { Text, View, TextInput, FlatList } from 'react-native'
import style, { AppName, SearchIcon, ClearIcon } from './Header-style'
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler'
import { getCatagories } from '../../Network/StoreAPI'

interface Props { }

interface State {
    isLoading: boolean,
    seletedCategorieId: number,
    categories?: any
}

export class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isLoading: true,
            seletedCategorieId: 1
        }
    }

    async componentDidMount() {
        try {
            let res = await getCatagories()
            if (res.status !== 200) throw res.data
            console.log(res)
            this.setState({ categories: res.data, isLoading: false })
            console.log(this.state)
        } catch (error) {
            console.log(error)
        }
    }

    _renderCategories = ({ item, index }: any) => {
        const { seletedCategorieId } = this.state
        return (
            <View>
                <TouchableNativeFeedback onPress={() => this.setState({ seletedCategorieId: item.id })}>
                    <View style={seletedCategorieId === item.id && style.but}>
                        <Text style={style.butText}>{item.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.col1}>
                    <AppName>ECommerce</AppName>
                </View>
                <View style={style.col2}>
                    <View style={style.searchBar}>
                        <SearchIcon />
                        <TextInput
                            style={style.inputText}
                            placeholder="Search"
                        />
                        <TouchableOpacity>
                            <ClearIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.col3}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.categories}
                        renderItem={({ item, index }) => this._renderCategories({ item, index })}
                    />
                </View>
            </View>
        )
    }
}