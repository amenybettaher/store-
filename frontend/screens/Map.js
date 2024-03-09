import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';

export default function MapPage() {
  const [mapRegion, setMapRegion] = useState({
    latitudeDelta: 0.08,
    longitudeDelta: 0.01,
  });
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const predefinedAddresses = [
    { name: 'Magasin Général', address: 'Av. Mongi Slim, Le Kef 7100' },
    { name: 'aziza', address: '5M4W+HGP,Le Kef' },
    // Add more predefined addresses as needed
  ];

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.08,
      longitudeDelta: 0.01,
    });
  };

  const addMarker = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const newMarker = {
      latitude,
      longitude,
      id: Date.now().toString(),
    };
    setMarkers([...markers, newMarker]);
  };

  const removeMarker = (markerId) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
    setMarkers(updatedMarkers);
  };

  const searchSupermarkets = async () => {
    try {
      // Geocoding API request using fetch
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          searchQuery
        )}&apiKey=1031a808d7194c2d8e19768de1b8d928`
      );
      const result = await response.json();

      // Check if there are features in the result
      if (result.features && result.features.length > 0) {
        // Extract latitude and longitude from the first feature in the response
        const location = result.features[0].geometry.coordinates;

        // Create a new marker at the geocoded location
        const newMarker = {
          latitude: location[1],
          longitude: location[0],
          id: Date.now().toString(),
        };

        // Add the new marker to the markers array
        setMarkers([...markers, newMarker]);
      } else {
        console.log('No features found in the geocoding response.');

        // Check if the search result matches any predefined address
        const matchedAddress = predefinedAddresses.find((address) =>
          result.features.some((feature) => feature.properties.label.includes(address.address))
        );

        if (matchedAddress) {
          const location = result.features[0].geometry.coordinates;
          const newMarker = {
            latitude: location[1],
            longitude: location[0],
            id: Date.now().toString(),
          };
          setMarkers([...markers, newMarker]);
        } else {
          console.log('No matching predefined address found.');
        }
      }
    } catch (error) {
      console.error('Error searching supermarkets:', error);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter country or supermarket name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={searchSupermarkets} />

      <MapView style={styles.map} region={mapRegion} onLongPress={addMarker}>
        {markers.map((marker, index) => (
          <Marker
            key={index.toString()}
            coordinate={marker}
            title={`Marker ${index + 1}`}
            onPress={() => removeMarker(marker.id)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 50,
  },
});
