import React, { useRef, useEffect } from 'react';
import { Modal, Image, Text, View, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

const ArticleDetails = ({ article, onClose }) => {
  // Animation setup
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
   
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.articleContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          <Image source={{ uri: article.image }} style={styles.image} />
          <View style={styles.articleDetails}>
            <Text style={styles.name}>{article.name}</Text>
            <Text style={styles.price}>Prix : {article.price} DT</Text>
            <Text style={styles.description}>Description : {article.description}</Text>
            <Text style={styles.product_Num}>Quantite : {article.product_Num}</Text>
            <Text style={styles.rayon}> Rayon : {article.rayon}</Text>
            <Text style={styles.etage}>Etage : {article.etage}</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: 'white', 
    padding: 8,
    borderRadius: 16,
  },
  closeText: {
    fontSize: 19,
    color: "red",
  },
  articleContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ArticleDetails;
