import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1E221E',
        flex: 1
    },
    innercontainer: {
        flexDirection: "row",
        backgroundColor: '#0D181A',
        marginHorizontal: 15,
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: "contain",
        borderRadius: 15
    },
    starcontainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flexDirection: "row",
        zIndex: 1,
        position: "absolute",
        left: 120,
        top: 14,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 10
    },
    ort: {
        color: '#fff'
    },
    titlecontainer: {
        marginLeft:10
    },
    title: {
        color: '#fff',
        fontWeight:"bold",
        fontSize:20
    },
    titletext: {
        color: '#fff',
        fontWeight:"bold"
    },
    downcontainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    moneycontainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:15,
        marginLeft:10
    },
    money:{
        color: '#fff',
        fontSize:17
    },
    backcontainer:{
        backgroundColor: '#D17742',
        alignItems:"center",
        marginTop:15,

        borderRadius:10
    },
})