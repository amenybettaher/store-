import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(true); // Initial state set to true
  const [barcodeData, setBarcodeData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setBarcodeData(data);
    setScanning(false); // Disable scanning after successful scan
    // Perform any additional logic here (e.g., add barcode data to a list, show a success message)
    alert(`Barcode ${data} scanned successfully!`);
  };

  const startScanning = () => {
    setScanning(true); // Enable scanning
    setBarcodeData(null); // Reset barcode data
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanning && ( // Render BarCodeScanner only if scanning is enabled
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {barcodeData && (
        <View style={styles.dataContainer}>
          <Text>Data: {barcodeData}</Text>
          <Button title="Scan Again" onPress={startScanning} />
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
