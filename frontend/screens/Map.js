import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

export default function MapPage() {
  const [mapRegion, setMapRegion] = useState({
    latitudeDelta: 0.08,
    longitudeDelta: 0.01,
  });
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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
      // Geocoding API request  fetch
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          searchQuery
        )}&apiKey=30244598c9a24a42b3551f2d75de7850`
      );
      const result = await response.json();

      // Extract latitude and longitude from the API response
      const location = result.features[0].geometry.coordinates;

      // Create a new marker at the geocoded location
      const newMarker = {
        latitude: location[1],
        longitude: location[0],
        id: Date.now().toString(),
      };

      // Add the new marker to the markers array
      setMarkers([...markers, newMarker]);
    } catch (error) {
      console.error('Error searching supermarkets:', error);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  // useEffect(() => {
  //   Geocoder.init('30244598c9a24a42b3551f2d75de7850'); // Initialize Geocoder with your API key
  // }, []);

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
    marginTop:50
  },
});
