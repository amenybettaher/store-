import React from 'react';
import { View, Text } from 'react-native';

export default function Trolleys({ barcodeData }) {
  return (
    <View>
      <Text>Trolleys</Text>
      {barcodeData && (
        <Text> Barcode data: {barcodeData.code}</Text>
      )}
    </View>
  );
}