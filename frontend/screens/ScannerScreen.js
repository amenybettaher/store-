import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backendUrl = 'http://192.168.211.1:8000';

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
        Alert.alert("Error", "Product already in wallet");
      } else {
        wallet[barcode] = productToAdd;
        await AsyncStorage.setItem('wallet', JSON.stringify(wallet));
        Alert.alert("Success", "Product added to wallet");
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
        <View style={styles.container}>
          <Card>
            <Card.Title>Product Details</Card.Title>
            <Card.Divider />
            {productDetails && (
              <>
                <Image
                  style={{ width: '100%', height: 100 }}
                  resizeMode="contain"
                  source={{ uri: productDetails.image }}
                />
                <Text>Product Name: {productDetails.name}</Text>
                <Text>Barcode: {productDetails.barcode}</Text>
                <Text>Price: {productDetails.price}</Text>
                <View style={styles.quantityContainer}>
                  <Text>Select Quantity: </Text>
                  <Picker
                    selectedValue={selectedQuantity}
                    onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(quantity => (
                      <Picker.Item key={quantity} label={`${quantity}`} value={quantity} />
                    ))}
                  </Picker>
                </View>
                <Button title="Add to Wallet" onPress={addToWallet} />
              </>
            )}
            <Button title="Scan other product" onPress={startScanning} />
          </Card>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scannerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  scanAgainButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  torchButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    backgroundColor: '#eee',
  },
});
