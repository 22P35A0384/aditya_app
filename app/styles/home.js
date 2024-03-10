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
        paddingTop:5,
        paddingBottom:5,
        flexDirection:"row",
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    head:{
        fontSize:30
    },
    img:{
        height:50,
        width:50,
        borderRadius:50
    },
    msg:{
        height:30,
        width:30,
    }
});

export default Homestyles;