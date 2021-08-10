import React from 'react';
import {SafeAreaView, Text, View, TextInput, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import { ProductCard } from './ProductCard';
import product_data from "./data/product_data.json";
const App= () => {
  
  return (
   <SafeAreaView>
     <View style={styles.container}>
<Text style={styles.titleStyle}>PATIKASTORE</Text>
<TextInput
     style={styles.inputStyle}
    placeholder={"Ara..."}    />
 <FlatList numColumns={2} data={product_data} renderItem={({item}) => <ProductCard product={item}></ProductCard>}/>   
    
     </View>
   </SafeAreaView>  
  );
};

const styles = StyleSheet.create({
  titleStyle:{
    fontSize:40,
    fontWeight:"bold",
    color:"purple",
    padding:10
  },
  inputStyle:{
    borderRadius:10,
    backgroundColor:"#E0E2DB",
    margin:10,
    padding:10
  }
});


export default App;
