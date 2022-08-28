import React from "react";
import { View, Text, Image } from "react-native";

import styles from './HomeSpecial.style';

const HomeSpecial = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.lezzet.com.tr/images-xxlarge-secondary/cappuccino-nedir-nasil-yapilir-f2999f21-f9b0-4dd7-9a39-9f42b8ebfee0.jpg' }}
                style={styles.image}
            />
            <Text style={styles.text}>Denemeniz gereken 5 kahve çekirdeği</Text>
        </View>
    )
}
export default HomeSpecial;