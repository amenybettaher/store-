import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import Product from "./Product";
import Product2 from "./Product2";

function HomePage() {
  const images = [
    "https://cdn4.vectorstock.com/i/1000x1000/74/98/promotion-sign-in-modern-supermarket-background-vector-22427498.jpg",
    "https://media.istockphoto.com/id/155443388/photo/dairy-discount-in-grocery-store.jpg?s=612x612&w=0&k=20&c=zpSo5vC7jQHzsJju0Y48E-a5TQItSRDJbz4vF7WuCWc=",
    "https://img.freepik.com/premium-photo/fresh-food-vegetables-shopping-basket-mobile-smartphone-wood-table-with-supermarket-aisle-blurred-background-grocery-online-concept_293060-4950.jpg",
  ];

  return (
    <ScrollView>
      <View style={{marginTop: 45, marginBottom: 650}}>

        <SliderBox
          images={images}
          dotColor="#7D0C43"
          inactiveDotColor="#13274F"
          imageLoadingColor="black"
          autoPlay={true}
          autoplayInterval={1000}
          circleLoop={true}
          onCurrentImagePressed={(index) => alert(index + 1)}
          firstItem={4}
          paginationBoxVerticalPadding={20}
          ImageComponentStyle={{
            borderRadius: 30,
            width: "94%",
          }}
        />
        <Text style={styles.upc}>upcoming product</Text>

        <Product />

        <Product2 />
        <Product2 />
      </View>
    </ScrollView>
  );
}

export default HomePage;

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
