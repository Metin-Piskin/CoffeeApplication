import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconiki from 'react-native-vector-icons/MaterialIcons'

import styles from './CategoryCardComponent.style';


const CategoryCardComponent = ({products , key, onPress}) => {
    return (
        <View style={styles.container} key={key}>
            <View style={styles.topcontainer}>
                <View style={styles.scorcontainer}>
                    <Icon name="star" size={15} color={"#D17742"} />
                    <Text style={styles.scortext}>{products.scor}</Text>
                </View>
                <Image
                    source={{ uri: products.imgURL }}
                    style={styles.image}
                />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.titletext}>{products.title}</Text>
                <Text style={styles.categorytext}>{products.category}</Text>
                <View style={styles.bottomcontainer}>
                    <View style={styles.moneycontainer}>
                        <Iconiki name="attach-money" size={13} color={"#D17742"} />
                        <Text style={styles.pricetext}>{products.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.plusbutton} onPress={onPress}>
                        <Icon name="plus" size={22} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default CategoryCardComponent;