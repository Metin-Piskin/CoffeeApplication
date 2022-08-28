import React from "react";
import Lottie from "lottie-react-native";

function LottieLogin() {
    return (
        <Lottie source={require("../../Assets/login.json")} autoPlay loop />
    )
}
export default LottieLogin;