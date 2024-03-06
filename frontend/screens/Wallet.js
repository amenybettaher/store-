import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const WalletScreen = ({ route }) => {
  const [scanItems, setScanItems] = useState([]);
  const [total, setTotal] = useState(0);

  const saveScanItems = async (items) => {
    try {
      const serializedItems = JSON.stringify(items);
      await AsyncStorage.setItem('scanItems', serializedItems);
    } catch (error) {
      console.error(error);
    }
  };

  const loadScanItems = async () => {
    try {
      const serializedItems = await AsyncStorage.getItem('scanItems');
      if (serializedItems !== null) {
        const items = JSON.parse(serializedItems);
        setScanItems(items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductDetails = async (barcode) => {
    try {
      const response = await axios.get(`http://192.168.43.142:8000/article/get/${barcode}`);
      const productDetails = response.data[0];
      setScanItems((prevItems) => [...prevItems, productDetails]);
      saveScanItems([...scanItems, productDetails]); // Save updated items to AsyncStorage
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch product details');
    }
  };

  useEffect(() => {
    const updateTotal = () => {
      const newTotal = scanItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
      setTotal(newTotal);
    };

    updateTotal();
    saveScanItems(scanItems); // Save initial items to AsyncStorage
  }, [scanItems]);

  useEffect(() => {
    // Load items from AsyncStorage when the component mounts
    loadScanItems();

    // Fetch product details when barcode changes
    if (route.params?.barcode) {
      fetchProductDetails(route.params.barcode);
    }
  }, [route.params?.barcode]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      {scanItems.length > 0 ? (
        <>
          <FlatList
            data={scanItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.productItemContainer}>
                <Text style={styles.productName}>Product Name: {item.name}</Text>
                <Image style={styles.productImage} source={{ uri: item.image }} />
                <Text style={styles.productPrice}>Price: {item.price}</Text>
              </View>
            )}
          />
          <Text style={styles.totalText}>Total: {total.toFixed(2)}</Text>
        </>
      ) : (
        <Text>No items in the wallet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItemContainer: {
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 10,
    marginTop: 10,
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
});

export default WalletScreen;
