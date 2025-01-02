import React, { useEffect, useState } from 'react';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div style={pageContainerStyle}>
      <div style={dashboardContainerStyle}>
        <h2 style={titleStyle}>Product Dashboard</h2>
        <div style={productListStyle}>
          {products.map((product) => (
            <div key={product.id} style={productCardStyle}>
              <div style={productImageContainerStyle}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={productImageStyle}
                />
              </div>
              <div style={productDetailsStyle}>
                <h3 style={productTitleStyle}>{product.title}</h3>
                <p style={productCategoryStyle}>{product.category}</p>
                <p style={productPriceStyle}>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inline styling
const pageContainerStyle = {
  backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-background-layout-banner-product-presentation_1258-55391.jpg")', // Use an actual background image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '20px',
};

const dashboardContainerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  backgroundImage: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const productListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
};

const productCardStyle = {
  borderRadius: '12px',
  backgroundColor: '#fff',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  cursor: 'pointer',
  transform: 'scale(1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
};

const productImageContainerStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
};

const productImageStyle = {
  width: '100%',
  height: '200px', // Fixed height for the image
  objectFit: 'cover',
  objectPosition: 'center', // Ensures the image stays centered within the container
};

const productDetailsStyle = {
  padding: '20px',
  textAlign: 'center',
};

const productTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const productCategoryStyle = {
  fontSize: '1rem',
  color: '#888',
  marginBottom: '8px',
};

const productPriceStyle = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#e74c3c',
};

export default ProductDashboard;
