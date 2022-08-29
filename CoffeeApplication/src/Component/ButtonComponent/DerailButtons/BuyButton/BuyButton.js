import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from './BuyButton.style';

const BuyButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Buy Now</Text>
        </TouchableOpacity>
    )
}
export default BuyButton;