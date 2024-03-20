import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, Dimensions, StyleSheet, Image } from 'react-native';

const { width } = Dimensions.get('window');

const segments = [
  { text: "Prize 1", color: "#FF5733", image: require('../assets/bloc-note.png') },
  { text: "Prize 2", color: "#33FFA8", image: require('../assets/Chocolat.png') },
  { text: "Prize 3", color: "#3366FF", image: require('../assets/ecouteurs.png') },
  { text: "Prize 4", color: "#FF33EA", image: require('../assets/Iphone.png') },
  { text: "Prize 5", color: "#FFD433", image: require('../assets/Nadhif.jpg') },
  { text: "Prize 6", color: "#33FFE5", image: require('../assets/stylo.png') },
  { text: "Prize 7", color: "#FF3366", image: require('../assets/Wallet.png') },
  { text: "Prize 8", color: "#9D33FF", image: require('../assets/Xbox.png') }
];

const WheelOfLuck = () => {
  const [spinning, setSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpin = () => {
    if (!spinning) {
      setSpinning(true);
      spinValue.setValue(0);
      const spinDuration = 3000; // Adjust spin duration as needed

      Animated.timing(spinValue, {
        toValue: 1,
        duration: spinDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setSpinning(false);
        // Do something with the result when the spin stops
        const selectedIndex = Math.floor(spinValue.__getValue() * segments.length);
        const selectedSegment = segments[selectedIndex];
        alert(`You won: ${selectedSegment.text}`);
      });
    }
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, { transform: [{ rotate: spin }] }]}>
        {segments.map((item, index) => (
          <View key={index} style={[styles.segment, { transform: [{ rotate: `${index * (360 / segments.length)}deg` }] }]}>
            <View style={[styles.segmentInner, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.segmentImage} />
              <Text style={styles.segmentText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </Animated.View>
      <TouchableOpacity onPress={startSpin} disabled={spinning} style={styles.spinButton}>
        <Text style={styles.spinButtonText}>Spin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: width * 0.45,
    overflow: 'hidden',
  },
  segment: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentInner: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  segmentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  segmentImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  spinButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
  },
  spinButtonText: {
    color: 'white',
  },
});

export default WheelOfLuck;
