import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Heart = ({
  width, height, iconTitle, fill
}) => {
  Heart.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-heart" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <path fill={fill} d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
    </svg>
  );
};

export default class HeartOption extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    const { isSelected } = this.state;
    const { onClick } = this.props;
    this.setState({ isSelected: !isSelected });
    onClick(!isSelected);
  }

  render() {
    const { isSelected } = this.state;
    const color = isSelected === true ? '#AD2E16' : '#CABEBE';

    return (
      <button type="button" onClick={this.changeState} className="botton-box botton-box-favorite">
        <Heart fill={color} width="1.5em" height="1.5em" iconTitle="heart" />
      </button>
    );
  }
}
