import React from "react";
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './LoginInput.style';

const LoginInput = ({ placeholder, onType, value, isSecure, icon, onBlur, keyboardType, textContentType }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={25} color={"#494F4E"} />
            <TextInput
                style={styles.ınput}
                placeholderTextColor='#494F4E'
                autoCapitalize="none"
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
                onBlur={onBlur}
                keyboardType={keyboardType}
                textContentType={textContentType}
            />
        </View>
    )
}
export default LoginInput;