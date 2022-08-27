import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Data from '../../Data.json';

const Detail = (props) => {
    const { id } = props.route.params;
    console.log(id + '. Coffee')
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}
export default Detail;