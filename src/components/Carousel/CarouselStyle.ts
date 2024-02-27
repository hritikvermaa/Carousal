import { StyleSheet,Dimensions } from "react-native";



const CarouselStyle=StyleSheet.create({
    img:{
        backgroundColor:'red',
        height:10,
        width:10,
        borderRadius:5,
        marginHorizontal:6,

    },
    renderDotIndicators:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        position:"absolute",
        bottom:15,
        left:"40%"

    },
    image:{
        backgroundColor:'yellow',
        height:10,
        width:10,
        borderRadius:5,
        marginHorizontal:6,
    
    },
})

export default CarouselStyle