// AddArticleModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddArticleModal.css';


const AddArticleModal = ({ addArticle }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    code: '',
    image: '',
    name: '',
    description: '',
    price: '',
    product_Num: '',
    category: ''
  });

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(formData);
    toggleModal();
  };

  return (
    <div className='PUP_UP'>
      <button className="add-button" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPlus} />
        Ajouter  produit
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Ajouter Nouveau produit</h2>
            <form onSubmit={handleSubmit}>
            <span> Code</span>
              <input type="text" name="code" placeholder="Code" value={formData.code} onChange={handleChange} />
              <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
              <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} />
              <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
              <input type="text" name="price" placeholder="Prix" value={formData.price} onChange={handleChange} />
              <input type="text" name="product_Num" placeholder="Numéro de produit" value={formData.product_Num} onChange={handleChange} />
              <input type="text" name="category" placeholder="Catégorie" value={formData.category} onChange={handleChange} />
              <button type="submit">Ajouter</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddArticleModal;
