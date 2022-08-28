import React, { useState } from "react";
import { View, ScrollView, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import stayles from './HomeCategory.style';
import CategoryCardComponent from '../../CardComponent/CategoryCardComponent';
import Data from '../../../Data.json';

const listTab = [
    {
        "status": "Hepsi"
    },
    {
        "status": "Latte"
    },
    {
        "status": "Macchiato"
    },
    {
        "status": "Mocha"
    },
    {
        "status": "Frappe"
    },
    {
        "status": "Cappuccino"
    }
]

const HomeCategory = () => {
    const navigation = useNavigation();
    const [status, setStatus] = useState('Hepsi');
    const [datalist, setDataList] = useState(Data);

    const setStatusFilter = status => {
        if (status !== 'Hepsi') {
            setDataList([...Data.filter(e => e.category === status)])
        } else {
            setDataList(Data)
        }
        setStatus(status)
    }

    const onPresCoffee = id => {
        navigation.navigate('Detail', { id });
    }

    const renderProducts = ({ item, index }) => {
        return (
            <CategoryCardComponent
                products={item}
                key={index}
                onPress={() => onPresCoffee(item.id)}
            />
        )
    }

    return (
        <>
            <ScrollView horizontal={true}>
                {
                    listTab.map(e => (
                        <TouchableOpacity
                            style={stylis.container}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text style={[stylis.btnNormal, status === e.status && stylis.btnPress]}>
                                {e.status}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <FlatList
                horizontal={true}
                data={datalist}
                renderItem={renderProducts}
            />
        </>
    )
}
export default HomeCategory;

const stylis = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    btnNormal: {
        color: '#494F4E',
        fontSize: 21,
        fontStyle: "normal",
    },
    btnPress: {
        color: '#D97E3C',
        fontSize: 21,
        fontStyle: "normal",
    },

});