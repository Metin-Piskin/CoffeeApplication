import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:'#0D181A',
        paddingHorizontal: 10,
        paddingVertical:10,
        marginHorizontal:10,
        marginBottom:10,
        marginTop:5,
        borderRadius:20,
    },
    image:{
        width:150,
        height:120,
        resizeMode:"contain",
        borderRadius:25,
        marginRight:10
    },
    text:{
        flex:1,
        color:'white',
        fontWeight:"bold",
        fontSize:18
    }
})