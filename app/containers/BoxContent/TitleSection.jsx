import React from 'react';
import PropTypes from 'prop-types';

const TitleHeart = ({
  width, height, iconTitle, fill
}) => {
  TitleHeart.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-titleheart" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <path fill={fill} d="M24 12.977c-3.866 0-7 3.158-7 7.055 0 2.22 1.020 4.197 2.609 5.491-2.056 1.525-3.609 2.488-3.609 2.488s-14-8.652-14-15.622c0-4.2 2.583-8.399 7.5-8.399 4.5 0 6.5 4.296 6.5 4.296s1.75-4.296 6.5-4.296 7.416 4.115 7.416 8.399c0 0.958-0.272 1.943-0.716 2.932-1.281-1.436-3.134-2.344-5.2-2.344zM24 13.984c3.313 0 6 2.707 6 6.047s-2.687 6.048-6 6.048c-3.314 0-6-2.708-6-6.048s2.686-6.047 6-6.047zM21 21.039h2v2.016h2v-2.016h2v-2.016h-2v-2.016h-2v2.016h-2v2.016z"></path>
    </svg>
  );
};

const TitleEye = ({
  width, height, iconTitle, fill
}) => {
  TitleEye.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-eye" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <path fill={fill} d="M32 4h-4v-4h-4v4h-4v4h4v4h4v-4h4z"></path>
      <path fill={fill} d="M26.996 13.938c0.576 0.64 1.1 1.329 1.563 2.062-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.022-0.001-0.043-0.001-0.065-3.415-0.879-5.947-3.957-5.998-7.635-0.657-0.074-1.325-0.113-2.001-0.113-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-0.551-1.101-1.209-2.137-1.958-3.095-0.915 0.537-1.946 0.897-3.046 1.034zM13 10c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"></path>
    </svg>
  );
};

const TitleSection = ({ title, stockHeart, stockEye }) => {
  TitleSection.propTypes = {
    title: PropTypes.string,
    stockHeart: PropTypes.number,
    stockEye: PropTypes.number
  };

  const heartStock = `(${stockHeart})`;
  const eyeStock = `(${stockEye})`;
  return (
    <h2 className="section-tech__title">
      {title}
      <div className="section-tech__content">
        <div className="section-tech__content-item">
          <TitleHeart width="1.5em" height="1.5em" iconTitle="titleHeart" fill="#AD2E16" />
          {heartStock}
        </div>

        <div className="section-tech__content-item">
          <TitleEye width="1.5em" height="1.5em" iconTitle="titleHeart" fill="#393583" />
          {eyeStock}
        </div>
      </div>
    </h2>
  );
};

export default TitleSection;
