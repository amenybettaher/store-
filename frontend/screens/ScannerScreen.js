import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const backendUrl = 'http://192.168.1.4:8000';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [barcodeData, setBarcodeData] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setBarcodeData(data);
    setScanning(false);

    fetchProductDetails(data);
  };

  const fetchProductDetails = (barcode) => {
    axios
      .get(`${backendUrl}/article/get/${barcode}`)
      .then((response) => {
        let AllDetails = response.data[0];
        AllDetails["barcode"] = barcode;
        setProductDetails(AllDetails);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch product details');
      });
  };

  const addToWallet = async () => {
    if (productDetails) {
      let wallet = await AsyncStorage.getItem('wallet');
      if (wallet) {
        wallet = JSON.parse(wallet);
      } else {
        wallet = {};
      }
      const { barcode, name, price, image } = productDetails;
      const totalPrice = parseFloat(price) * selectedQuantity;
      const productToAdd = { barcode, name, price: totalPrice.toFixed(3), image, quantity: selectedQuantity };

      if (wallet[barcode]) {
        Alert.alert("Erreur", "Produit déjà dans le portefeuille");
      } else {
        wallet[barcode] = productToAdd;
        await AsyncStorage.setItem('wallet', JSON.stringify(wallet));
        Alert.alert("Succès", "Produit ajouté au portefeuille");
      }
    }
  };

  const startScanning = () => {
    setScanning(true);
    setBarcodeData(null);
    setProductDetails(null);
    setSelectedQuantity(1);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanning && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          flashMode="torch"
        />
      )}
      {barcodeData && (
        <View style={styles.cardContainer}>
          <Card>
            <Card.Title>détails du produit</Card.Title>
            <Card.Divider />
            {productDetails && (
              <>
                <Image
                  style={styles.productImage}
                  resizeMode="contain"
                  source={{ uri: productDetails.image }}
                />
                <Text style={styles.productDetails}>Nom du produit: {productDetails.name}</Text>
                <Text style={styles.productDetails}>Prix: {productDetails.price} DT</Text>
                <View style={styles.pickerContainer}>
                  <Text style={styles.pick}>Sélectionnez la quantité: </Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={selectedQuantity}
                    onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(quantity => (
                      <Picker.Item key={quantity} label={`${quantity}`} value={quantity} />
                    ))}
                  </Picker>
                </View>
                <TouchableOpacity style={[styles.button, styles.addButton]} onPress={addToWallet}>
  <Text style={styles.buttonText}>Ajouter au portefeuille</Text>
</TouchableOpacity>
              </>
            )}
           <TouchableOpacity style={[styles.button, styles.scanButton]} onPress={startScanning}>
  <Text style={styles.buttonText}>Scanner un autre produit</Text>
</TouchableOpacity>
          </Card>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  cardContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    aspectRatio: 1, // Ensures the image maintains its aspect ratio
    marginBottom: 20,
    resizeMode: 'contain', // Adjusts the image to fit within the specified dimensions while maintaining its aspect ratio
  },
  productDetails: {
    fontSize: 18,
    marginBottom: 10,

  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
   
  },
  picker: {
    height: 50,
    width: width - 40,
    
  },
  button: {
    backgroundColor: '#5cb85c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scanButton: {
    backgroundColor: 'black',
  },
  addButton: {
    backgroundColor: '#7D0C43',
  },
  pick : {
    marginLeft : 15,
    marginTop : 10
  }
});
