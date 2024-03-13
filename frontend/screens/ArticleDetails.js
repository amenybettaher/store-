import React from "react";
import { Modal, Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ArticleDetails = ({ article, onClose }) => {
  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <View style={styles.articleContainer}>
          <Image source={{ uri: article.image }} style={styles.image} />
          <View style={styles.articleDetails}>
            <Text style={styles.name}>{article.name}</Text>
            <Text style={styles.price}>{article.price}</Text>
            <Text style={styles.description}>Description : {article.description}</Text>
            <Text style={styles.product_Num}>Product Num : {article.product_Num}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    fontSize: 19,
    color: "red",
  },
  articleContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
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
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ArticleDetails;