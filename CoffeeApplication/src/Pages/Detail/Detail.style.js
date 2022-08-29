import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 2;

export default StyleSheet.create({
    container: {
        backgroundColor: '#1E221E',
        flex: 1
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        zIndex: 1

    },
    blurcontainer: {
        width: windowWidth,
        position: "absolute",
        zIndex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        top: 208,
        borderRadius: 50
    },
    ycontainer: {
        flexDirection: "row",
        marginVertical: 10
    },
    acontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    titlecontainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: "center"
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    titletext: {
        color: '#A99A97',
        fontWeight: 'bold',
        fontSize: 17
    },
    puan: {
        flexDirection: "row",
        marginHorizontal: 20,

    },
    ort: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 5
    },
    oy: {
        color: '#A99A97',
        fontWeight: 'bold',
        fontSize: 15,
        top: 10
    },
    buttoncontainer: {
        backgroundColor: '#0D181A',
        marginHorizontal: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    descriptioncontainer:{
        marginHorizontal:15,
        marginVertical:20,
    },
    descriptiontitle: {
        color: '#93969B',
        fontWeight: 'bold',
        fontSize: 22,
    },
    description: {
        color: '#fff',
        marginTop:5
    },
    sizeoncontainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginBottom:10,
    },
    pricecontainer:{
        marginTop:10,
        marginLeft:10
    },
    price:{
        color:'#979696',
        fontSize:19,
        marginLeft:15
    },
    money:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:25
    }
})