import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './HomeHeader.style';


const HomeHeader = ({ Exit }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bbcontainer} onPress={Exit}>
                <Icon name="logout" size={30} color={"#D17742"} />
            </TouchableOpacity>

            <View style={styles.avatarcontainer}>
                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                    style={styles.avatar}
                />
            </View>
        </View>
    )
}
export default HomeHeader;