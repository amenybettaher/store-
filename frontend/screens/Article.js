import React, { useState, useEffect } from "react";
import { Image, TextInput, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity  , RefreshControl  } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import image from '../assets/new.png';
import axios from 'axios';
import ArticleDetails from './ArticleDetails'; 

const Magasine = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [current , setCurrent] = useState(1)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.114:8000/article/getAll');
        setArticles(response.data);
        setFilteredArticles(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    const filtered = articles.filter(article =>
      article.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchText, articles]);

  const openArticleDetails = (article) => {
    setSelectedArticle(article);
  };

  const closeArticleDetails = () => {
    setSelectedArticle(null);
  };
  const fetchArticlesByCategory = async (category) => {
    try {
      const response = await axios.get(`http://192.168.1.114:8000/article/getByCategory/${category}`);
      const categoryArticles = response.data;
      const filteredCategoryArticles = categoryArticles.filter(article =>
        article.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setArticles(categoryArticles);
      setFilteredArticles(filteredCategoryArticles);
    } catch (error) {
      console.error('Error fetching articles by category:', error);
    }
  };
  const items = 6
  const NBPage = Math.ceil(filteredArticles.length/items)
  const startIndex = (current -1)*items
  const endIndex = startIndex + items

  const DataPerPage = filteredArticles.slice(startIndex ,endIndex );

const onRefresh = React.useCallback(async () => {
  setRefreshing(true); 
  try {
    const response = await axios.get('http://192.168.1.114:8000/article/getAll');
    setArticles(response.data);
    setFilteredArticles(response.data);
  } catch (error) {
    console.error('Error refreshing data:', error);
  } finally {
    setRefreshing(false); 
  }
}, []);

  return (
<ScrollView
  contentContainerStyle={styles.scrollContainer}
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
>
      <View style={styles.magasine}>
        <Image
          style={styles.newArrivalHighResolutionLoIcon}
          source={image}
        />
<View style={styles.mapContainer}>
<TouchableOpacity style={styles.circle} onPress={() => fetchArticlesByCategory('Pâtes')}>
  <Text>Pâtes</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.circle} onPress={() => fetchArticlesByCategory('boissons')}>
  <Text>boissons</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.circle} onPress={() => fetchArticlesByCategory('alimentaire')}>
  <Text>alimentaire</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.circle} onPress={() => fetchArticlesByCategory('produits-ménagers')}>
  <Text>produits-ménagers</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.circle} onPress={() => fetchArticlesByCategory('Middle East')}>
  <Text>Middle East</Text>
</TouchableOpacity>
</View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Find restaurants..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.cardContainer}>
          {DataPerPage.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => openArticleDetails(item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.articleDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View> 
      <View style={styles.pagination}>
  <TouchableOpacity style={styles.paginationButton} onPress={() => setCurrent(current - 1)} disabled={current === 1}>
    <Text style={styles.buttonText}>Previous</Text>
  </TouchableOpacity>
  <View style={{ flex: 1 }} /> 
  <TouchableOpacity style={styles.paginationButton} onPress={() => setCurrent(current + 1)} disabled={current === NBPage}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
</View>
      {selectedArticle && <ArticleDetails article={selectedArticle} onClose={closeArticleDetails} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  magasine: {
    alignItems: "center",
    paddingBottom: 20,
  },
  newArrivalHighResolutionLoIcon: {
    width: 550,
    height: 199,
  },
  mapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  circle: {
    width: 75,
    height: 35,
    borderRadius: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000', 
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 30 , 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5, 
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    width: '48%', 
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%', 
    height: 155, 
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    textAlign: 'center', 
    marginTop: 'auto', 
    marginBottom: 'auto',
    fontWeight: "bold",
    marginRight: 12,
  },
  price: {
    fontSize: 18,
    textAlign: 'center', 
    marginTop: 'auto', 
    marginBottom: 'auto',
    marginLeft: 12,
    marginRight: 12,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Magasine;
