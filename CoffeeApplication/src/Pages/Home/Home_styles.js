import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1E221E',
        flex: 1
    },
    title_container: {
        marginHorizontal: 15,
        marginVertical: 5
    },
    coffee: {
        backgroundColor: '#1E221E',
        alignItems:"center",
        justifyContent:"center",
        padding:30,
        borderRadius:61,
        position:"absolute",
        top:-10,
        left:135,
        zIndex:1,
    },
    bildirim:{
        backgroundColor:'#D17742',
        width:10,
        height:10,
        borderRadius:5,
        zIndex:1,
        position:"absolute",
        top:10,
        right:12
    },
    text:{
        color:'white',
        fontWeight:"bold",
        fontSize:18,
        marginTop:5,
        marginHorizontal:25,
    }

})