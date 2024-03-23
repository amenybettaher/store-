import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity,Text} from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

const backendURL = 'http:/192.168.1.4:8000';


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
      src: getMapSrc(location.coords.latitude, location.coords.longitude)
    });
  };

  // const addMarker = (event) => {
  //   const { latitude, longitude } = event.nativeEvent.coordinate;
  //   const newMarker = {
  //     latitude,
  //     longitude,
  //     id: Date.now().toString(),
  //   };
  //   setMarkers([...markers, newMarker]);
  // };

  // const removeMarker = (markerId) => {
  //   const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
  //   setMarkers(updatedMarkers);
  // };

  const searchSupermarkets = () => {
    setMapRegion({
      src: getMapSrc(mapRegion.latitude, mapRegion.longitude, 13, searchQuery)
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  getMapSrc = (alt, lng, zoom =13, searchLocation = "Le kef") => {
      searchLocation_formated = searchLocation.replace(" ", "%20");
      let MAPsrc = "/iframe/www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d53337.15394885963!2d11.11!3d33.33!3m2!1i1024!2i768!4f13.1!2m1!1sAziza!5e0!3m2!1sen!2stn!4v1709981449631!5m2!1sen!2stn";
      return backendURL + MAPsrc.replace("33.33", alt+"").replace("11.11", lng+"").replace("13", zoom+"").replace("Aziza", searchLocation_formated);
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez le nom  du supermarché"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
  <TouchableOpacity style={styles.Button} onPress={searchSupermarkets}>
        <Text style={styles.buttonText}>Recherche</Text>
      </TouchableOpacity>

      <WebView
        style={styles.map}
        source={{ uri: mapRegion.src }}
      />
     </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft:10
  },
  map: {
    flex: 1,
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingLeft: 20,
    marginTop: 30,
    borderRadius: 10,
    width: 210,
    top:20,
  },
  Button:{
    backgroundColor:'#7D0C43',
    height: 30,
    width:140,
    marginLeft:230,
    top:-10,
    borderRadius: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginTop:0
  },
});