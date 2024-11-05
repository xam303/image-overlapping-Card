// src/components/ResponsiveCard.js

import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveCard.css';

const ResponsiveCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} className="card-btn">Learn More</a>
      </div>
    </div>
  );
};

// PropTypes to validate props
ResponsiveCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
};

// Default prop for link
ResponsiveCard.defaultProps = {
  link: '#'
};

export default ResponsiveCard;
