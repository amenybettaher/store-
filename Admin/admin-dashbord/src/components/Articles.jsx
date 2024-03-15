<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Article.css'

const Articles = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div>
      <h1>Articles</h1>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Product Num</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.code}</td>
              <td><img src={article.image} alt={article.name} /></td>
              <td><input type="text" defaultValue={article.name} onChange={e => article.name = e.target.value} /></td>
              <td><input type="text" defaultValue={article.description} onChange={e => article.description = e.target.value} /></td>
              <td><input type="text" defaultValue={article.price} onChange={e => article.price = e.target.value} /></td>
              <td><input type="text" defaultValue={article.product_Num} onChange={e => article.product_Num = e.target.value} /></td>
              <td><input type="text" defaultValue={article.category} onChange={e => article.category = e.target.value} /></td>
              <td>
              <FontAwesomeIcon class="action-icon" icon={faSave} onClick={() => handleUpdate(article.id, article)} />
              <FontAwesomeIcon class="action-icon" icon={faTrash} onClick={() => handleDelete(article.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Article.css'; // Import the CSS file
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AddArticleModal from './AddArticleModal'

const Articles = ({switchView}) => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div>
      <Navbar />
      <Sidebar switchView={switchView} />
      <h1>Articles</h1>
      <AddArticleModal addArticle={addArticle} />
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Product Num</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td><input type="text" defaultValue={article.code} onChange={e => article.code = e.target.value} /></td>
              <td><img src={article.image} alt={article.name} /></td>
              <td><input type="text" defaultValue={article.name} onChange={e => article.name = e.target.value} /></td>
              <td><input type="text" defaultValue={article.description} onChange={e => article.description = e.target.value} /></td>
              <td><input type="text" defaultValue={article.price} onChange={e => article.price = e.target.value} /></td>
              <td><input type="text" defaultValue={article.product_Num} onChange={e => article.product_Num = e.target.value} /></td>
              <td><input type="text" defaultValue={article.category} onChange={e => article.category = e.target.value} /></td>
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
>>>>>>> df5ddae4ecf13a9eec67674c038410f92ec3fc44
