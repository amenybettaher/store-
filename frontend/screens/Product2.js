import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import data from "../assets/data";
import { MaterialIcons } from "@expo/vector-icons";

const Product2 = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={ styles.get}>Products On Promotion</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 1,
                  left: 17,
                  fontSize: 27,
                  fontWeight: "900",
                  color: "white",
                  backgroundColor:'#C22672',
                }}
              >
                {item.offer} OFF
              </Text>
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

export default Product2;

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
