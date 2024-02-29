// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geocoder from 'react-native-geocoding'; // Install with: npm install react-native-geocoding

// const Map = () => {
//   const [supermarketLocations, setSupermarketLocations] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const searchSupermarkets = async () => {
//     try {
//       const response = await Geocoder.from(searchQuery);
//       const { results } = response;

//       const locations = results.map((result) => ({
//         name: result.formatted_address,
//         latitude: result.geometry.location.lat,
//         longitude: result.geometry.location.lng,
//       }));

//       setSupermarketLocations(locations);
//     } catch (error) {
//       console.error('Error searching supermarkets:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter country or supermarket name"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />
//       <Button title="Search" onPress={searchSupermarkets} />
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.7749, // Set your default location
//           longitude: -122.4194,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {supermarketLocations.map((location, index) => (
//           <Marker
//             key={index}
//             coordinate={{
//               latitude: location.latitude,
//               longitude: location.longitude,
//             }}
//             title={location.name}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default Map;
