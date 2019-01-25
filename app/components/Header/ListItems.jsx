import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListItems extends Component {
  static propTypes = {
    items: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const currentSite = window.location.href;
    if (currentSite.includes('/features')) {
      this.setState({ isSelected: 'features' });
    } else if (currentSite.includes('/support')) {
      this.setState({ isSelected: 'support' });
    } else if (currentSite.includes('/contats')) {
      this.setState({ isSelected: 'contats' });
    } else {
      this.setState({ isSelected: 'home' });
    }
  }

  handleClick(event) {
    let value = event.target.innerText;
    value = value.toLowerCase();
    this.setState({ isSelected: value });
  }

  render() {
    const { items } = this.props;
    const { isSelected } = this.state;
    const result = items.list.map((item) => {
      const selected = item.name === isSelected;
      return (
        <li key={item.id} className="list__item">
          <Link onClick={this.handleClick} className={selected ? 'list__link list__link--selected' : 'list__link'} to={item.link}>{item.name}</Link>
        </li>
      );
    });

    return (
      <ul className="list">
        {result}
      </ul>
    );
  }
}

export default ListItems;
