import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import data2 from "../data2";
  import { MaterialIcons } from "@expo/vector-icons";
  
  const Products3 = () => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={ styles.get}>Products non available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data2.map((item, index) => (
            <Pressable style={{ margin: 10 }} key={index}>
              <ImageBackground
                imageStyle={{ borderRadius: 6 }}
                style={{ aspectRatio: 5 / 6, height: 170 }}
                source={{ uri: item.image }}
              >
          
              </ImageBackground>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
                {item.name}
              </Text>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:3}}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.rating}</Text>
                <Text style={{marginLeft:3}}>•</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default Products3;
  
  const styles = StyleSheet.create({
    get:{
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: 10,
      marginLeft: -210,
    },
  });
  