import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './HomeHeader.style';



const HomeHeader = ({ Exit }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bbcontainer} onPress={Exit}>
                <View style={styles.iconcontainer}>
                    <Icon name="square-rounded" size={18} color={"#494F4E"} />
                    <Icon name="square-rounded" size={18} color={"#494F4E"} />
                </View>
                <View style={styles.iconcontainer}>
                    <Icon name="square-rounded" size={18} color={"#494F4E"} />
                    <Icon name="square-rounded" size={18} color={"#494F4E"} />
                </View>
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