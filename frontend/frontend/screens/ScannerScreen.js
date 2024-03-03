import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { Card } from 'react-native-elements';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [barcodeData, setBarcodeData] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [scanItem, setScanItem] = useState([]);
  const [total, setTotal] = useState(0);

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
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Product confirmed');
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
        const newScanItem = [...scanItem, response.data[0]];
        setScanItem(newScanItem);

        const newTotal = newScanItem.reduce(
          (acc, item) => acc + parseFloat(item.price),
          0
        );
        setTotal(newTotal);

        setProductDetails(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch product details');
      });
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
        <View style={styles.dataContainer}>
          <Card>
            <Card.Title style={styles.cardTitle}>قفتي</Card.Title>
            <Card.Divider style={styles.divider} />
            {productDetails && (
              <>
                <FlatList
                  data={scanItem}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.productItemContainer}>
                      <Image
                        style={styles.productImage}
                        resizeMode="contain"
                        source={{ uri: item.image }}
                      />
                      <Text style={styles.productName}>
                        Product Name: {item.name}
                      </Text>
                      <Text style={styles.productPrice}>Price: {item.price}</Text>
                    </View>
                  )}
                />
                <Button
                  title="Scan other product"
                  onPress={startScanning}
                  style={styles.scanButton}
                  titleStyle={styles.scanButtonText}
                />
                <Text style={styles.totalText}>Total: {total.toFixed(2)}</Text>
                
              </>
            )}
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
    backgroundColor: '#f4f4f4', // Adjust background color as needed
  },
  dataContainer: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    backgroundColor: '#aaa',
    marginVertical: 10,
  },
  productItemContainer: {
    marginBottom: 15,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  scanButton: {
    marginTop: 15,
    backgroundColor: '#3498db', // Adjust button color
  },
  scanButtonText: {
    color: '#ffffff', // Adjust button text color
  },
});
