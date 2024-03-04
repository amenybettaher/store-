import { Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";


function HomePage() {
  const images = [
    "https://cdn4.vectorstock.com/i/1000x1000/74/98/promotion-sign-in-modern-supermarket-background-vector-22427498.jpg",
    "https://media.istockphoto.com/id/155443388/photo/dairy-discount-in-grocery-store.jpg?s=612x612&w=0&k=20&c=zpSo5vC7jQHzsJju0Y48E-a5TQItSRDJbz4vF7WuCWc=",
    "https://img.freepik.com/premium-photo/fresh-food-vegetables-shopping-basket-mobile-smartphone-wood-table-with-supermarket-aisle-blurred-background-grocery-online-concept_293060-4950.jpg",
  ];

  return (
    <View style={{marginTop:45, marginBottom: 515  }}>
     <SliderBox
  images={images}
  dotColor="#7D0C43"
  inactiveDotColor="#13274F"
  imageLoadingColor="black"
  autoPlay={true}
  autoplayInterval={1000}
  circleLoop={true}
  onCurrentImagePressed={(index)=> alert(index+1)}
  firstItem={4}
  paginationBoxVerticalPadding={20}
  ImageComponentStyle={{
    borderRadius: 30,
    width: "94%",
  }}
/>

      
    
    </View>
  );
}

export default HomePage
