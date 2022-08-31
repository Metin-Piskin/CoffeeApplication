import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

import styles from './KareButton.style';

const BackButton = ({ BackPress }) => {
    return (
        <TouchableOpacity style={styles.backcontainer} onPress={BackPress}>
            <Back />
        </TouchableOpacity>
    )
}


export { BackButton, Heart, HeartPress, BackFav }


function Back(props) {
    return (
        <Svg width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.5 12.5L3.25 7L11.5 1.5L10.5 0L0 7L10.5 14L11.5 12.5Z" fill="#D17742" />
        </Svg>
    )
}

function BackFav(props) {
    return (
        <Svg width="26" height="28" viewBox="0 0 13 15" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path fillRule="evenodd" clipRule="evenodd" d="M1.00283 2.49702L9.25 8.00126L0.997172 13.497L1.9964 14.9975L12.5 8.00293L2.0036 0.997531L1.00283 2.49702Z" fill="#D17742"/>
        </Svg>
    )
}

function Heart(props) {
    return (
        <Svg width="22" height="19" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M6.50553 0.589844C8.4403 0.589844 10.0935 1.96892 11.0018 2.91969C11.9101 1.96892 13.5597 0.589844 15.4935 0.589844C18.8268 0.589844 21.1538 2.91323 21.1538 6.23907C21.1538 9.90369 18.2637 12.2723 15.4677 14.5634C14.1477 15.6462 12.7815 16.7649 11.7338 18.0055C11.5575 18.2132 11.2991 18.3332 11.0277 18.3332H10.9741C10.7018 18.3332 10.4443 18.2123 10.2689 18.0055C9.21938 16.7649 7.85415 15.6452 6.53322 14.5634C3.73814 12.2732 0.846146 9.90461 0.846146 6.23907C0.846146 2.91323 3.17322 0.589844 6.50553 0.589844Z" fill="#494F4E" />
        </Svg>
    )
}

function HeartPress(props) {
    return (
        <Svg width="22" height="19" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M6.50553 0.589844C8.4403 0.589844 10.0935 1.96892 11.0018 2.91969C11.9101 1.96892 13.5597 0.589844 15.4935 0.589844C18.8268 0.589844 21.1538 2.91323 21.1538 6.23907C21.1538 9.90369 18.2637 12.2723 15.4677 14.5634C14.1477 15.6462 12.7815 16.7649 11.7338 18.0055C11.5575 18.2132 11.2991 18.3332 11.0277 18.3332H10.9741C10.7018 18.3332 10.4443 18.2123 10.2689 18.0055C9.21938 16.7649 7.85415 15.6452 6.53322 14.5634C3.73814 12.2732 0.846146 9.90461 0.846146 6.23907C0.846146 2.91323 3.17322 0.589844 6.50553 0.589844Z" fill="#D17742" />
        </Svg>
    )
}