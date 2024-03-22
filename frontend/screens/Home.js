import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Product from "./Product";
import Product2 from "./Product2";
import Products3 from "./products3";
function HomePage() {
  const images = [
    "https://cdn4.vectorstock.com/i/1000x1000/74/98/promotion-sign-in-modern-supermarket-background-vector-22427498.jpg",
    "https://img.freepik.com/premium-vector/ramadan-sale-discount-banner-template-promotion_7087-1099.jpg",
    "https://www.foodrepublic.com/img/gallery/how-to-decode-tricky-sale-gimmicks-at-the-grocery-store/l-intro-1684196212.jpg",
    "https://www.jeu-concours.biz/content/img/ig-noel.png",
    
  ];

  return (
    <ScrollView>
      <View style={{ marginTop: 45, marginBottom: 100 }}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
          dotColor="#7D0C43"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
        <Text style={styles.upc}>Produits à venir</Text>
        <Product />
        <Product2 />
        <Products3 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  upc: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: -240,
  },
});

export default HomePage;
