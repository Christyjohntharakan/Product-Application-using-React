import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Added:', {
      productName,
      price,
      category,
      image: image ? image.name : 'No image selected',
    });
  };

  return (
    <div style={pageContainerStyle}>
      <div style={formContainerStyle}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="image">Product Image</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
              required
              style={inputStyle}
            />
          </div>

          {imagePreview && (
            <div style={imagePreviewStyle}>
              <img src={imagePreview} alt="Product Preview" style={imagePreviewImgStyle} />
            </div>
          )}

          <button type="submit" style={submitButtonStyle}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

const pageContainerStyle = {
  backgroundImage: 'url("https://png.pngtree.com/background/20211215/original/pngtree-modern-simple-elegant-cool-gradient-cream-landing-page-website-background-picture-image_1455090.jpg")', // Your background image URL here
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '20px',
};

const formContainerStyle = {
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white background for the form
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%',
};

const imagePreviewStyle = {
  marginTop: '10px',
  textAlign: 'center',
};

const imagePreviewImgStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  border: '1px solid #ddd',
};

const submitButtonStyle = {
  padding: '12px 20px',
  border: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AddProduct;
