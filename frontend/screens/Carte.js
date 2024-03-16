import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';

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
      const response = await axios.get(`http://192.168.1.16:8000/carte/code/${inputCode}`);
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
            <Text style={styles.buttonText}>get your card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.invitationContainer}>
          <Image
            source={require("../assets/Card (3).png")}
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
    justifyContent: 'center',
    alignItems: 'center',
    width:500,
    backgroundColor: '#ffff',

  },
  cardContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    margin: 10,
    top: 25,
    elevation: 100,
    marginLeft:-129
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
    color:'#7D0C43'
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
    paddingHorizontal: 20,
    borderRadius: 5,
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
    top:65,
    marginLeft:-11
  },
  pointsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 387,
    top: 525,
    height: 60
  },
  pointsText: {
    fontSize: 13,
    color: '#ccc',  
    padding: 10,  
    borderRadius: 5,  
  },
  cdContainer: {
    right: -23,
    top: -88,
    height: 60},

    codes:{
    fontSize: 13,
    color: 'black',  // Set font color to white

  }
});

export default Carte;

