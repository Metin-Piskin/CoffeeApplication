import React from "react";
import Lottie from "lottie-react-native";

function LottieSign() {
    return (
        <Lottie source={require("../../Assets/sign.json")} autoPlay loop />
    )
}
export default LottieSign;