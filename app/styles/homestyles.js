import { StyleSheet } from "react-native";

const Homestyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f4f2ee'
    },
    sub1:{
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'#fd752c',
        paddingTop:10,
        paddingBottom:10,
        flexDirection:"row",
        justifyContent: 'space-evenly',
        paddingLeft:10,
        paddingRight:10,
    },
    head:{
        fontSize:25,
        fontWeight:'bold',
        // lineHeight:30
    },
    img:{
        height:30,
        width:50,
        // borderRadius:50
    },
    msg:{
        height:30,
        width:30,
    }
});

export default Homestyles;