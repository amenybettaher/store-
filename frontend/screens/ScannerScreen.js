import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [barcodeData, setBarcodeData] = useState(null)
  const [scanItems, setScanItems] = useState([])
  const [total, setTotal] = useState(0)
  const [torchEnabled, setTorchEnabled] = useState(false)

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    requestCameraPermission()
  }, [])

  const fetchProductDetails = async (barcode) => {
    try {
      const response = await axios.get(`http://192.168.43.142:8000/article/get/${barcode}`)
      const productDetails = response.data[0]
      setScanItems((prevItems) => [...prevItems, productDetails])
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Failed to fetch product details')
    }
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true)
    setBarcodeData(data)

    await fetchProductDetails(data)

    const newTotal = scanItems.reduce((acc, item) => acc + parseFloat(item.price), 0)
    setTotal(newTotal)

    alert(`Bar code with code ${data} has been scanned !`)
  }

  const toggleTorch = () => {
    setTorchEnabled((prev) => !prev)
  }

  const handleScanAgain = async () => {
    setScanned(false)

    // Check if there's a barcode to fetch details for
    if (barcodeData) {
      await fetchProductDetails(barcodeData)
      const newTotal = scanItems.reduce((acc, item) => acc + parseFloat(item.price), 0)
      setTotal(newTotal)
    } else {
      console.error('No barcode data to scan again.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner Screen</Text>

      {hasPermission === null ? (
        <Text>Requesting for camera permission</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            torchMode={torchEnabled ? 'on' : 'off'}
          />

          {scanned && (
            <TouchableOpacity style={styles.scanAgainButton} onPress={handleScanAgain}>
              <MaterialCommunityIcons name="barcode-scan" size={50} color="#007bff" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.torchButton} onPress={toggleTorch}>
            <MaterialCommunityIcons
              name={torchEnabled ? 'flashlight' : 'flashlight-off'}
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.goToWalletButton}
            onPress={() => navigation.navigate('Wallet', { barcode: barcodeData })}
          >
            <MaterialCommunityIcons name="wallet" size={50} color="#8640f0" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
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
    borderRadius: 10,
  },
  goToWalletButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'left',
  },
})

