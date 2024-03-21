import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Wallet = () => {
  const [wallet, setWallet] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchWallet = async () => {
      const walletJson = await AsyncStorage.getItem('wallet');
      const walletData = JSON.parse(walletJson);
      setWallet(walletData);
      calculateTotalPrice(walletData);
    };
    
    fetchWallet();
  }, []);

  const calculateTotalPrice = (walletData) => {
    let total = 0;
    Object.values(walletData).forEach(item => {
      total += parseFloat(item.price);
    });
    setTotalPrice(total);
  };

  const deleteItem = async (barcode) => {
    const updatedWallet = { ...wallet };
    delete updatedWallet[barcode];
    setWallet(updatedWallet);
    await AsyncStorage.setItem('wallet', JSON.stringify(updatedWallet));
    calculateTotalPrice(updatedWallet);
  };

  return (
    <View style={styles.container}>
      {Object.values(wallet).map(item => (
        <View key={item.barcode} style={styles.item}>
          <View style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity onPress={() => deleteItem(item.barcode)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={styles.totalPrice}>Total Price: {totalPrice.toFixed(3)} DT</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50, 
    height: 50,
    marginRight: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  price: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#555'
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10
  },
  totalPrice: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Wallet;