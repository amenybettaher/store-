import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Carte = () => {
  const navigation = useNavigation();

  const [cardData, setCardData] = useState({
    points: '',
    number: '',
    code: '',
  });

  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.1.16:8000/carte/code/${inputCode}`);
      const { points, number, code } = response.data[0];
      setCardData({ points, number, code });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonPress = () => {
    fetchData();
  };

  const handleJeuConcours = () => {
    if (parseInt(cardData.points) >= 5000) {
      navigation.navigate('fortuned');
    } else {
      Alert.alert(
        'Insufficient Points',
        'You need at least 5000 points to participate in the Jeu Concours.'
      );
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.topSection}>
  <TouchableOpacity onPress={handleJeuConcours}>
    <Image source={require('../assets/spiner.webp')} style={styles.icon} />
  </TouchableOpacity>
  <Text style={styles.subtitle}>Jeu Concours</Text>
</View>


      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.title}>Votre Carte Fidélité</Card.Title>
        <Card.Divider />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Card Code :</Text>
          <TextInput
            style={styles.input}
            placeholder="Card Code"
            onChangeText={(text) => setInputCode(text)}
            value={inputCode}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Get Your Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.invitationContainer}>
          <Image
            source={require('../assets/Card (3).png')}
            style={styles.backgroundImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>N°: {cardData.number}</Text>
          </View>
        </View>
      </Card>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points: {cardData.points}</Text>
      </View>
      <View style={styles.cdContainer}>
        <Text style={styles.codes}> {cardData.code}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  topSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  icon: {
    width: 60, 
    height: 60, 
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D0C43',
  },
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    elevation: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7D0C43',
  },
  inputContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#7D0C43',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    
  },
  customButton: {
    backgroundColor: '#7D0C43',
    paddingVertical: 10,
    paddingHorizontal: 20, // Adjust this value to manage width indirectly
    borderRadius: 5,
    marginTop: -5,
    alignSelf: 'center', // Align the button to the center
    // Directly set a width if you prefer a fixed size
    // width: 150, // Uncomment and adjust this value to set a fixed width
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  invitationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 17,
    left: 20,
  },
  text: {
    fontSize: 16,
    color: '#ccc',
    top: 65,
    marginLeft: -11,
  },
  pointsContainer: {
    position: 'absolute',
    bottom: 168,
    left: 25,
  },
  pointsText: {
    fontSize: 13,
    color: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  cdContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  codes: {
    fontSize: 13,
    color: 'black',
  },
});

export default Carte;
