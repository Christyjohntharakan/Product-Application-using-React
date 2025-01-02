// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <h1 style={titleStyle}>Product Management</h1>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/add-product" style={linkStyle}>Add Product</Link>
      </div>
    </div>
  );
};

// Inline styling
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'Orange',
  color: 'white',
};

const titleStyle = {
  margin: 0,
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '25px',
};

export default Navbar;
