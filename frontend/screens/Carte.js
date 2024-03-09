import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

const Carte = () => {
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
      const response = await axios.get(`http://192.168.43.142:8000/carte/code/${inputCode}`);
      const { points, number, code } = response.data[0]; // Adjust this according to your API response structure
      setCardData({ points, number, code });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonPress = () => {
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.title}>You're fidelite Card</Card.Title>
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
          <Button title="Fetch Data" onPress={handleButtonPress} />
        </View>
        <View style={styles.invitationContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwqDMBh_dvUcPb1Vb1SOoNm6U5eG0p1Mm4UxU2SqLREXUP1fqGiYGT7hui4fTDjwvpP8&usqp=CAU' }}
            style={styles.backgroundImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.invitationText}>You're invited to an exclusive event!</Text>
            <Text style={styles.text}>Card Number: {cardData.number}</Text>
          </View>
        </View>
      </Card>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>Points: {cardData.points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff8e1',
    borderRadius: 10,
    margin: 80,
    elevation: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#673ab7',
  },
  inputContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#673ab7',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#673ab7',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginVertical: 10,
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
    top: 20,
    left: 20,
  },
  invitationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#673ab7',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  pointsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  pointsText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff',  // Set font color to white
    backgroundColor: '#673ab7',  // Set background color to purple
    padding: 10,  // Add padding to the text
    borderRadius: 5,  // Add border radius for rounded corners
  },
});

export default Carte;
