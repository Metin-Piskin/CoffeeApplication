import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from './CategoryButton.style';

const CategoryButton = ({ title, onPress,  onFocus}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} onFocus={onFocus}>
            <Text style={styles.title_text}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CategoryButton;