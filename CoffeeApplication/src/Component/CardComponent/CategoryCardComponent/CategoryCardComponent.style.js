import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor:'#0D181A',
        paddingHorizontal: 10,
        paddingVertical:10,
        marginHorizontal:5,
        borderRadius:15,
    },
    topcontainer: {},
    scorcontainer: {
        backgroundColor:'gray',
        position:"absolute",
        zIndex:1,
        right:0.2,
        paddingHorizontal:3,
        borderTopRightRadius:10,
        borderTopLeftRadius:1,
        borderBottomLeftRadius:10,
        flexDirection:"row"
    },
    scortext: {
        color:'white',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "stretch",
        borderRadius: 15,
    },
    innercontainer:{},
    titletext:{
        color:'white',
        fontWeight:"bold"
    },
    categorytext:{
        color:'white',
        opacity:0.5,
    },
    bottomcontainer:{
        flexDirection:"row"
    },
    pricetext:{
        color:'white',
        fontSize:13,
    },
    plusbutton: {
        backgroundColor:'#D97E3C',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6,
    },
    moneycontainer:{
        flexDirection:"row",
        flex:1,
        alignItems:'center'
    }
})