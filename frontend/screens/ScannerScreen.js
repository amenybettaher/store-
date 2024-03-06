import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';
import { Card } from 'react-native-elements';  
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

    fetchProductDetails(data);
  };

  const fetchProductDetails = (barcode) => {
    axios
      .get(`http://192.168.43.233:8000/article/get/${barcode}`)
      .then((response) => {
        setProductDetails(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch product details');
      });
  };

  const addToWallet = () => {
    if (productDetails) {
      axios.post('http://192.168.43.233:8000/wallet/add', {
        image: productDetails.image,
        name: productDetails.name,
        price: productDetails.price
      })
      .then(response => {
        console.log('Product added to wallet:', response.data);
        Alert.alert('Success', 'Product added to wallet');
      })
      .catch(error => {
        console.error('Failed to add product to wallet:', error);
        Alert.alert('Error', 'Failed to add product to wallet');
      });
    }
  };

  const startScanning = () => {
    setScanning(true);
    setBarcodeData(null);
    setProductDetails(null); 
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
                <Text>Price: {productDetails.price}</Text>
              
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
