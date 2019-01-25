import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({
  width, height, iconTitle, fill
}) => {
  SearchIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-search" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <path fill={fill} d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z"></path>
    </svg>
  );
};

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
    this.getFocus = this.getFocus.bind(this);
    this.lostFocus = this.lostFocus.bind(this);
  }

  getFocus() {
    this.setState({
      isSelected: true
    });
  }

  lostFocus() {
    this.setState({
      isSelected: false
    });
  }

  render() {
    const { isSelected } = this.state;
    const growStyle = { width: '300px' };
    const color = isSelected ? '#20232A' : '#FFF';
    if (isSelected) {
      growStyle.width = '450px';
    }
    return (
      <div className="section-nav__box-search" style={growStyle}>
        <input type="text" onFocus={this.getFocus} onBlur={this.lostFocus} className="section-nav__search" placeholder="search anything..." />
        <SearchIcon width="3em" height="3em" iconTitle="search" fill={color} />
      </div>
    );
  }
}
