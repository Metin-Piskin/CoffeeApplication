import React from "react";
import Lottie from "lottie-react-native";

function LottieHome() {
    return (
        <Lottie
            style={{height:300}}
            source={require("../../Assets/home.json")}
            autoPlay loop
        />
    )
}
export default LottieHome;