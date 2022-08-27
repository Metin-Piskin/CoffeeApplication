import React from "react";
import { View, Text } from "react-native";
import auth from "@react-native-firebase/auth";

import styles from './Home_styles';
import Search from '../../Component/HomeScreen/HomeInput';
import Category from '../../Component/HomeScreen/HomeCategory';
import Header from '../../Component/HomeScreen/HomeHeader';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header Exit={() => auth().signOut()} />
            <View style={styles.title_container}>
                <Text style={styles.title_text}>Find the best coffee for you</Text>
                <Search />
                <Category />
            </View>
        </View>
    );
}
export default Home;