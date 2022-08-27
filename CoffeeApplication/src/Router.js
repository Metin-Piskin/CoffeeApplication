import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from "@react-native-firebase/auth";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Notification from "./Pages/Notification";
import Detail from './Pages/Detail';
import Login from './Pages/Auth/Login';
import Sign from './Pages/Auth/Sign';

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#1E221E'
                }
            }}
        >
            <Tab.Screen
                name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Icon name="home-variant" size={30} color={"#D97E3C"} />
                        }
                        return <Icon name="home-variant" size={30} color={"#494F4E"} />
                    }
                }}
            />
            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Icon name="heart" size={30} color={"#D97E3C"} />
                        }
                        return <Icon name="heart" size={30} color={"#494F4E"} />
                    }
                }}
            />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Icon name="bell" size={30} color={"#D97E3C"} />
                        }
                        return <Icon name="bell" size={30} color={"#494F4E"} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>
    )
}

const Router = () => {
    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        })
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !userSession ? (
                        <Stack.Screen
                            name="AuthStack"
                            component={AuthStack}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <>
                            <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
                            <Stack.Screen name="Detail" component={Detail} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default Router;