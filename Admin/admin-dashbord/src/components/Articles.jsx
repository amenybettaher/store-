import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Article.css'; 
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AddArticleModal from './AddArticleModal';

const Articles = ({ switchView }) => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/article/get');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const addArticle = async (formData) => {
    try {
      await axios.post('http://localhost:8000/article/post', formData);
      fetchArticles(); // Refresh the articles after adding
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:8000/article/update/${id}`, updatedData);
      // Update the articles state immutably
      setArticles(prevArticles => {
        return prevArticles.map(article => {
          if (article.id === id) {
            return { ...article, ...updatedData };
          } else {
            return article;
          }
        });
      });
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/article/delete/${id}`);
      fetchArticles(); // Refresh the articles after deleting
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const filteredArticles = articles.filter(article =>
    article.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="articles-container">
      <Navbar />
      <Sidebar switchView={switchView} />
      <h1>Produites</h1>
      <AddArticleModal addArticle={addArticle} />
      <input
        type="search"
        placeholder="Rechercher par Nom..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <table className="article-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Description</th>
            <th>prix</th>
            <th>Numéro de produit</th>
            <th>Catégorie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map(article => (
            <tr key={article.id}>
              <td><input type="text" defaultValue={article.code} className="article-code" onChange={e => article.code = e.target.value} /></td>
              <td><img src={article.image} alt={article.name} className="article-image" /></td>
              <td><input type="text" defaultValue={article.name} className="article-name" onChange={e => article.name = e.target.value} /></td>
              <td><input type="text" defaultValue={article.description} className="article-description" onChange={e => article.description = e.target.value} /></td>
              <td><input type="text" defaultValue={article.price} className="article-price" onChange={e => article.price = e.target.value} /></td>
              <td><input type="text" defaultValue={article.product_Num} className="article-product-num" onChange={e => article.product_Num = e.target.value} /></td>
              <td><input type="text" defaultValue={article.category} className="article-category" onChange={e => article.category = e.target.value} /></td>
              <td><input type="text" defaultValue={article.rayon} className="article-rayon" onChange={e => article.rayon = e.target.value} /></td>
<td><input type="text" defaultValue={article.etage} className="article-etage" onChange={e => article.etage = e.target.value} /></td>
              <td>
                <div className='hiba'>
                  <FontAwesomeIcon className="icon-save" icon={faSave} onClick={() => handleUpdate(article.id, article)} />
                  <FontAwesomeIcon className="icon-delete" icon={faTrash} onClick={() => handleDelete(article.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
