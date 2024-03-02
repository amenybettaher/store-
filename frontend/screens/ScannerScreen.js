import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';
import { Card } from 'react-native-elements';  // Import the Card component
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';


export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [barcodeData, setBarcodeData] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setBarcodeData(data);
    setScanning(false);

    Alert.alert(
      'Add Item Confirmation',
      `Are you sure you want to add this product: ${data}?`,
      [
        {
          text: 'Cancel',
          onPress: () => {
            Alert.alert('Product cancelled');
            // Add your cancellation logic here
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Proceed with the intended action
            Alert.alert('Product confirmed');
            // Add your confirmation logic here
            fetchProductDetails(data);
          },
        },
      ]
    );
  };

  const fetchProductDetails = (barcode) => {
    axios
      .get(`http://192.168.1.7:8000/article/get/${barcode}`)
      .then((response) => {
        setProductDetails(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch product details');
      });
  };

  const startScanning = () => {
    setScanning(true);
    setBarcodeData(null);
    setProductDetails(null); // Reset product details when scanning a new product
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
        <View style={styles.dataContainer}>
          <Card>
            <Card.Title>قفتي</Card.Title>
            <Card.Divider />
            {productDetails && (
              <>
                <Image
                  style={{ width: '100%', height: 100 }}
                  resizeMode="contain"
                  source={{ uri: productDetails.image }}  // Use the product image URI
                />
                <Text>Product Name: {productDetails.name}</Text>
                <Text>Price: {productDetails.price}</Text>
                {/* Add more details as needed */}
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
  },
  dataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
  },
});
