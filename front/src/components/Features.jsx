import React from "react";
import PropTypes from "prop-types";

const Features = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

Features.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Features;
