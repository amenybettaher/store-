import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const backendUrl = 'http://192.168.1.19:8000';

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
      <Card containerStyle={styles.cardStyle}>
        <Card.Title style={styles.title}>Product Details</Card.Title>
        <Card.Divider />
        {productDetails && (
          <>
            <Image
              style={{ width: '100%', height: 100 }}
              resizeMode="contain"
              source={{ uri: productDetails.image }}
            />
            <Text style={styles.productDetailText}>Product Name: {productDetails.name}</Text>
            <Text style={styles.productDetailText}>Price: {productDetails.price}</Text>
            <View style={styles.quantityContainer}>
              <Text style={styles.productDetailText}>Select Quantity: </Text>
              <Picker
                selectedValue={selectedQuantity}
                style={styles.pickerStyle}
                onValueChange={(itemValue, itemIndex) => setSelectedQuantity(itemValue)}>
                {Array.from({ length: 100 }, (_, i) => i + 1).map(quantity => (
                  <Picker.Item key={quantity} label={`${quantity}`} value={quantity} />
                ))}
              </Picker>
            </View>
            <Button title="Add to Wallet" onPress={addToWallet} color="#34c759" />
          </>
        )}
        <Button
          title="Scan other product"
          onPress={startScanning}
          color="#48a1ff"
          style={styles.scanAgainButton}
        />
      </Card>
    </View>
  )}
</View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center', // Align children vertically in the center
    alignItems: 'center',
     
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#383838', // Dark text for better readability
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scanAgainButton: {
    position: 'absolute',
    bottom: 40, // Increased space from the bottom
    alignSelf: 'center',
    backgroundColor: '#48a1ff', // A pleasant blue color for the button
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 20, // Side margins for better spacing
    elevation: 3, // Subtle shadow for a floating button effect
  },
  torchButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#48a1ff', // Matching button color
    borderRadius: 20,
    padding: 10,
    elevation: 3, // Consistent shadow effect
  },
  cardStyle: {
    width: '100%',
     // Set a width for the card
    borderRadius: 15,
    borderRadius: 15, // Rounded corners for the card
    margin: 20, // Margin around the card
    padding: 20, // Padding inside the card
    elevation: 5, // Shadow effect for depth
  },
  productDetailText: {
    fontWeight: 'bold', // Bold text for product details
    marginVertical: 5, // Vertical margin for spacing
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10, // Vertical space around the quantity picker
  },
  pickerStyle: {
    width: 100, // Fixed width for the picker
    borderRadius: 20, // Rounded corners for the picker
  },
  addButton: {
    backgroundColor: '#34c759', // A green color for the add button
    borderRadius: 20,
    padding: 15,
    marginTop: 20, // Top margin for spacing from the last element
    elevation: 3, // Shadow effect
  },
});