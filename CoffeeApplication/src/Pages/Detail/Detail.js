import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Data from '../../Data.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconiki from 'react-native-vector-icons/MaterialIcons'

import styles from './Detail.style';
import { CoffeButton, MilkButton } from "../../Component/ButtonComponent/DerailButtons/KareTextButton/KareTextButton";
import { BackButton, HeartButton } from '../../Component/ButtonComponent/DerailButtons/KareButton/KareButton';
import BuyButton from '../../Component/ButtonComponent/DerailButtons/BuyButton';

const Detail = (props) => {
    const { id } = props.route.params;
    console.log(id + '. Coffee')

    const Back = () => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton BackPress={Back} />
                <HeartButton />
            </View>
            <Image
                source={{ uri: 'https://gastromanya.com/wp-content/uploads/2020/01/6-12.jpg' }}
                style={styles.image}
            />
            <View style={styles.blurcontainer}>
                <View style={styles.ycontainer} >
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>Karamel Coffee</Text>
                        <Text style={styles.titletext}>Latte</Text>
                    </View>
                    <CoffeButton />
                    <MilkButton />
                </View>
                <View style={styles.acontainer}>
                    <View style={styles.puan}>
                        <Icon name="star" size={28} color={"#D17742"} />
                        <Text style={styles.ort}>4.5</Text>
                        <Text style={styles.oy}>(6.986)</Text>
                    </View>
                    <TouchableOpacity style={styles.buttoncontainer}>
                        <Text style={styles.buttontext}>Medium Roasted</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptioncontainer}>
                <Text style={styles.descriptiontitle}>Description</Text>
                <Text style={styles.description}>Caramel coffee is a type of coffee that has been infused with the flavor of caramel. It’s made from brewed coffee, caramel sauce, and milk. It is often served with whipped cream on top.</Text>
            </View>
            <Text style={stylis.size}>Size</Text>
            <View style={styles.sizeoncontainer}>
                <TouchableOpacity style={stylis.sizebutton}>
                    <Text style={stylis.sizetext}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylis.sizebutton}>
                    <Text style={stylis.sizetext}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylis.sizebutton}>
                    <Text style={stylis.sizetext}>L</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={styles.pricecontainer}>
                    <Text style={styles.price}>Price</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Iconiki name="attach-money" size={35} color={"#D17742"} />
                        <Text style={styles.money}>4.20</Text>
                    </View>
                </View>
                <BuyButton />
            </View>
        </View>
    )
}
export default Detail;

const stylis = StyleSheet.create({
    sizebutton: {
        backgroundColor: "#494F4E",
        paddingHorizontal: 50,
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    sizetext: {
        color: '#fff',
        fontWeight: "bold",
    },
    size: {
        color: '#93969B',
        fontWeight: "bold",
        fontSize: 17,
        marginHorizontal: 20,
        marginBottom: 10,
    }
})