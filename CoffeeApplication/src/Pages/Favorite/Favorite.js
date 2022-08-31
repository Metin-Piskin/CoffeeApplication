import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconiki from 'react-native-vector-icons/MaterialIcons'

import styles from './Favorite_styles'
import { BackFav } from '../../Component/ButtonComponent/DerailButtons/KareButton/KareButton'

const Favorite = ({ navigation }) => {

    const FavPress = () => {
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Image
                    source={{ uri: 'https://gastromanya.com/wp-content/uploads/2020/01/6-12.jpg' }}
                    style={styles.image}
                />
                <View style={styles.starcontainer}>
                    <Icon name="star" size={15} color={"#D17742"} />
                    <Text style={styles.ort}>4.5</Text>
                </View>
                <View>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>Karamel Coffee</Text>
                        <Text style={styles.titletext}>Latte</Text>
                    </View>
                    <View style={styles.downcontainer}>
                        <View style={styles.moneycontainer}>
                            <Iconiki name="attach-money" size={22} color={"#D17742"} />
                            <Text style={styles.money}>4.20</Text>
                        </View>
                        <TouchableOpacity style={styles.backcontainer} onPress={FavPress}>
                            <Iconiki name="navigate-next" size={35} color={"#fff"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Favorite;