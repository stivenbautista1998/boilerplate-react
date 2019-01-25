import React from 'react';
import PropTypes from 'prop-types';

const Github = ({
  width, height, iconTitle, fill
}) => {
  Github.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-github" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <title id={iconTitle}>github</title>
      <path fill={fill} d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"></path>
    </svg>
  );
};

const Instagram = ({
  width, height, iconTitle, fill
}) => {
  Instagram.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-instagram" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <title id={iconTitle}>instagram</title>
      <path fill={fill} d="M16 0c-4.347 0-4.889 0.020-6.596 0.096-1.704 0.080-2.864 0.348-3.884 0.744-1.052 0.408-1.945 0.956-2.835 1.845s-1.439 1.781-1.845 2.835c-0.396 1.020-0.665 2.18-0.744 3.884-0.080 1.707-0.096 2.249-0.096 6.596s0.020 4.889 0.096 6.596c0.080 1.703 0.348 2.864 0.744 3.884 0.408 1.051 0.956 1.945 1.845 2.835 0.889 0.888 1.781 1.439 2.835 1.845 1.021 0.395 2.181 0.665 3.884 0.744 1.707 0.080 2.249 0.096 6.596 0.096s4.889-0.020 6.596-0.096c1.703-0.080 2.864-0.349 3.884-0.744 1.051-0.408 1.945-0.957 2.835-1.845 0.888-0.889 1.439-1.78 1.845-2.835 0.395-1.020 0.665-2.181 0.744-3.884 0.080-1.707 0.096-2.249 0.096-6.596s-0.020-4.889-0.096-6.596c-0.080-1.703-0.349-2.865-0.744-3.884-0.408-1.052-0.957-1.945-1.845-2.835-0.889-0.889-1.78-1.439-2.835-1.845-1.020-0.396-2.181-0.665-3.884-0.744-1.707-0.080-2.249-0.096-6.596-0.096zM16 2.88c4.271 0 4.78 0.021 6.467 0.095 1.56 0.073 2.407 0.332 2.969 0.553 0.749 0.289 1.28 0.636 1.843 1.195 0.559 0.56 0.905 1.092 1.195 1.841 0.219 0.563 0.48 1.409 0.551 2.969 0.076 1.688 0.093 2.195 0.093 6.467s-0.020 4.78-0.099 6.467c-0.081 1.56-0.341 2.407-0.561 2.969-0.299 0.749-0.639 1.28-1.199 1.843-0.559 0.559-1.099 0.905-1.84 1.195-0.56 0.219-1.42 0.48-2.98 0.551-1.699 0.076-2.199 0.093-6.479 0.093-4.281 0-4.781-0.020-6.479-0.099-1.561-0.081-2.421-0.341-2.981-0.561-0.759-0.299-1.28-0.639-1.839-1.199-0.561-0.559-0.92-1.099-1.2-1.84-0.22-0.56-0.479-1.42-0.56-2.98-0.060-1.68-0.081-2.199-0.081-6.459 0-4.261 0.021-4.781 0.081-6.481 0.081-1.56 0.34-2.419 0.56-2.979 0.28-0.76 0.639-1.28 1.2-1.841 0.559-0.559 1.080-0.919 1.839-1.197 0.56-0.221 1.401-0.481 2.961-0.561 1.7-0.060 2.2-0.080 6.479-0.080l0.060 0.040zM16 7.784c-4.54 0-8.216 3.68-8.216 8.216 0 4.54 3.68 8.216 8.216 8.216 4.54 0 8.216-3.68 8.216-8.216 0-4.54-3.68-8.216-8.216-8.216zM16 21.333c-2.947 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.461 7.46c0 1.060-0.861 1.92-1.92 1.92-1.060 0-1.92-0.861-1.92-1.92s0.861-1.919 1.92-1.919c1.057-0.001 1.92 0.86 1.92 1.919z"></path>
    </svg>
  );
};

const Youtube = ({
  width, height, iconTitle, fill
}) => {
  Youtube.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-youtube" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <title id={iconTitle}>youtube</title>
      <path fill={fill} d="M31.327 8.273c-0.386-1.353-1.431-2.398-2.756-2.777l-0.028-0.007c-2.493-0.668-12.528-0.668-12.528-0.668s-10.009-0.013-12.528 0.668c-1.353 0.386-2.398 1.431-2.777 2.756l-0.007 0.028c-0.443 2.281-0.696 4.903-0.696 7.585 0 0.054 0 0.109 0 0.163l-0-0.008c-0 0.037-0 0.082-0 0.126 0 2.682 0.253 5.304 0.737 7.845l-0.041-0.26c0.386 1.353 1.431 2.398 2.756 2.777l0.028 0.007c2.491 0.669 12.528 0.669 12.528 0.669s10.008 0 12.528-0.669c1.353-0.386 2.398-1.431 2.777-2.756l0.007-0.028c0.425-2.233 0.668-4.803 0.668-7.429 0-0.099-0-0.198-0.001-0.297l0 0.015c0.001-0.092 0.001-0.201 0.001-0.31 0-2.626-0.243-5.196-0.708-7.687l0.040 0.258zM12.812 20.801v-9.591l8.352 4.803z"></path>
    </svg>
  );
};

const Twitter = ({
  width, height, iconTitle, fill
}) => {
  Twitter.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <title id={iconTitle}>twitter</title>
      <path fill={fill} d="M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397l-0.063-0.027z"></path>
    </svg>
  );
};

const Facebook = ({
  width, height, iconTitle, fill
}) => {
  Facebook.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };

  return (
    <svg className="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <title id={iconTitle}>facebook</title>
      <path fill={fill} d="M30.235 0h-28.469c-0.975 0-1.765 0.791-1.765 1.765v28.469c0 0.976 0.791 1.765 1.765 1.765h15.325v-12.392h-4.172v-4.828h4.172v-3.567c0-4.132 2.525-6.38 6.212-6.38 1.767 0 3.285 0.129 3.728 0.188v4.32h-2.561c-2 0-2.389 0.961-2.389 2.361v3.081h4.779l-0.62 4.84h-4.159v12.376h8.153c0.977 0 1.767-0.789 1.767-1.765v-28.469c0-0.975-0.789-1.765-1.765-1.765z"></path>
    </svg>
  );
};

const mySocial = {
  social: [
    { id: 1, link: '#', src: <Facebook width="4em" height="4em" iconTitle="facebook" /> },
    { id: 2, link: '#', src: <Twitter width="4em" height="4em" iconTitle="twitter" /> },
    { id: 3, link: '#', src: <Youtube width="4em" height="4em" iconTitle="youtube" /> },
    { id: 4, link: '#', src: <Instagram width="4em" height="4em" iconTitle="instagram" /> },
    { id: 5, link: 'https://github.com/stivenbautista1998/boilerplate-react', src: <Github width="4em" height="4em" iconTitle="github" /> }
  ]
};

function SocialNetworks() {
  const result = mySocial.social.map((item) => (
    <li key={item.id} className="list-social__item">
      <a href={item.link} target="__blink">
        {item.src}
      </a>
    </li>
  ));
  return (
    <ul className="list-social">
      {result}
    </ul>
  );
}

export default SocialNetworks;
