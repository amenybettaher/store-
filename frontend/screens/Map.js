import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import * as Geolib from 'geolib';


const initialRegion = {
  latitudeDelta: 0.08,
  longitudeDelta: 0.01,
};

const MapPage = () => {
  const [region, setRegion] = useState(initialRegion);
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      } else {
        userLocation();
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const userLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        ...initialRegion,
      });
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  };

  const addMarker = useCallback((event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const newMarker = {
      latitude,
      longitude,
      id: Date.now().toString(),
    };

    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  }, [setMarkers]);

  const removeMarker = (markerId) => {
    const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
    setMarkers(updatedMarkers);
  };

  const searchLocation = async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          searchQuery
        )}&apiKey=1031a808d7194c2d8e19768de1b8d928`
      );
      const result = await response.json();
  
      if (result.features && result.features.length > 0) {
        const location = result.features[0].geometry.coordinates;
  
        console.log('Current Location:', region);
        console.log('Searched Location:', { latitude: location[1], longitude: location[0] });
  
        // Calculate distance using basic Haversine formula
        const R = 6371; // Radius of the Earth in kilometers
        const toRad = (value) => (value * Math.PI) / 180;
        const dLat = toRad(location[1] - region.latitude);
        const dLon = toRad(location[0] - region.longitude);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(region.latitude)) *
            Math.cos(toRad(location[1])) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
  
        console.log('Distance:', distance);
  
        if (distance < 100) {
          // Only update if the distance is within 150 kilometers (adjust as needed)
          setMarkers([{ latitude: location[1], longitude: location[0], id: Date.now().toString() }]);
          setRegion({ latitude: location[1], longitude: location[0], ...initialRegion });
        } else {
          console.log('The searched location is too far from your current location.');
        }
      } else {
        console.log('No features found in the geocoding response.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };
  

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    console.log('region:', region);
  }, [region]);

  useEffect(() => {
    Geocoder.init('30244598c9a24a42b3551f2d75de7850');
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter country or location name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={searchLocation} />

      <MapView style={styles.map} region={region} onLongPress={addMarker}>
        {markers.map((marker, index) => (
          <Marker
            key={marker.id}
            coordinate={marker}
            title={`Marker ${index + 1}`}
            onPress={() => removeMarker(marker.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

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

export default MapPage;
