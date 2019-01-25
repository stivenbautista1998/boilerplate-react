import React from 'react';
import PropTypes from 'prop-types';

export default function BoxFeatures({ title, img, text }) {
  BoxFeatures.propTypes = {
    title: PropTypes.string,
    img: PropTypes.element,
    text: PropTypes.string
  };
  return (
    <div className="section-feactures__item">
      <div className="section-feactures__item-image">
        {img}
      </div>
      <div className="section-feactures__item-content">
        <h2 className="section-feactures__item-title">{title}</h2>
        <p className="section-feactures__item-text">
          {text}
        </p>
      </div>
    </div>
  );
}
