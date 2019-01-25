import React from 'react';
import PropTypes from 'prop-types';

export default function BoxSupport({ title, img, text }) {
  BoxSupport.propTypes = {
    title: PropTypes.string,
    img: PropTypes.element,
    text: PropTypes.string
  };

  return (
    <div className="section-support__item">
      <div className="section-support__item-image">
        {img}
      </div>
      <div className="section-support__item-content">
        <h3 className="section-support__item-title">{title}</h3>
        <p className="section-support__item-text">{text}</p>
      </div>
    </div>
  );
}
