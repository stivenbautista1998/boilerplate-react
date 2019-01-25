import React from 'react';
import PropTypes from 'prop-types';
import HeartOption from './HeartOption';
import SeeOption from './SeeOption';

const styles = {
  html5: '#e34f26',
  css3: '#1572b6',
  javascript: '#E9D22F',
  sass: '#c69',
  react: '#61dafb',
  webpack: '#1C78C0'
};

function Content({
  mytitle, text, img, onClickHeart, onClickSee
}) {
  Content.propTypes = {
    mytitle: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.element,
    onClickHeart: PropTypes.func,
    onClickSee: PropTypes.func
  };

  const myStyle = [
    {
      border: `2px solid ${styles[mytitle]}`,
      borderRadius: '3px'
    },
    {
      background: styles[mytitle]
    }
  ];
  return (
    <div className="grid__item one-whole large--one-third medium--one-half">
      <div className="content-box">
        <div style={myStyle[0]}>
          <div className="content-box__header" style={myStyle[1]}>
            <div className="content-box__image">
              {img}
            </div>
            <h2 className="content-box__title">
              {mytitle}
            </h2>
          </div>
          <div className="content-box__body">
            <div className="content-box__button">
              <HeartOption onClick={onClickHeart} />
              <SeeOption onClick={onClickSee} />
            </div>

            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
