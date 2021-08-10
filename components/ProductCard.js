import React from "react";
import { View,Image,Text, StyleSheet, Dimensions } from "react-native";


export const ProductCard = ({product}) =>{


    return(
        <View style={styles.container} >
            <View style={styles.imageContainer}>
            <Image style={styles.imageStyle} source={{uri:product.imgURL}}></Image>
            </View>
      
      <Text style={styles.titleStyle}>{product.title} </Text>
      <Text style={styles.priceStyle}>{product.price}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
    width:180,
    height:310,
    backgroundColor:"#E0E2DB",
    margin:7
    },
    imageContainer:{
        margin:10
    },
    
imageStyle:{
        width:170,
        height:170,
        borderRadius:5
        
    },
    titleStyle:{
        fontSize:20,
        fontWeight:"bold",
        margin:5

    },
    priceStyle:{
        fontSize:19,
        color:"grey",
        fontWeight:"bold",
        paddingLeft:7,
        paddingTop:5
    }
});