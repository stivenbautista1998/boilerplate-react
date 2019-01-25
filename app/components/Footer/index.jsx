import React from 'react';
// import PropTypes from 'prop-types';
import SocialNetworks from './SocialNetworks';
import './style.scss';

const myFooter = {
  author: 'Stiven Bautista',
  license: 'private'
};

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <p className="footer__content">
        {`Autor: ${myFooter.author}`}
      </p>
      <p className="footer__content">{`\u00A9 Copyright 2018`}</p>
      <SocialNetworks />
      <p className="footer__content">
        ready to develop
        <span role="img" aria-label="icon of heart"> ❤️</span>
      </p>
    </div>
  </footer>
);

export default Footer;
