import React from "react";
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './HomeInput.style';

const HomeInput = () => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={30} color={"#494F4E"} />
            <TextInput
                style={styles.ınput}
                onChange={null}
                onChangeText={null}
                placeholder='Ara...'
                placeholderTextColor='#494F4E'
            />
        </View>
    )
}
export default HomeInput;