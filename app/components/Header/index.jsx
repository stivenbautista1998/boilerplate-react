import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import ListItems from './ListItems';
import img from '../../images/logo.svg';
import './style.scss';

const myList = {
  list: [
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'features', link: '/features' },
    { id: 3, name: 'support', link: '/support' },
    { id: 4, name: 'contats', link: '/contats' }
  ]
};

function Icon({ logo }) {
  Icon.propTypes = {
    logo: PropTypes.string
  };
  return (
    <img src={logo} className="icon-logo" alt="my logo from page" />
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="section-nav">
        <a href="#">
          <Icon logo={img} />
        </a>
        <div className="section-nav__container">
          <ListItems items={myList} />
          <Search />
        </div>
      </nav>
    </header>
  );
}

export default Header;
