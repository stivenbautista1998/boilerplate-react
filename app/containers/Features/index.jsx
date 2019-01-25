import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ListBoxFeatures from './ListBoxFeatures';
import './style.scss';

const NotFound = ({
  width, height, iconTitle, fill
}) => {
  NotFound.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    iconTitle: PropTypes.string,
    fill: PropTypes.string
  };
  return (
    <svg className="icon icon-notfound" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" aria-labelledby={iconTitle}>
      <path fill={fill} d="M31.576 26.211l-11.999-24c-0.677-1.355-2.061-2.211-3.577-2.211s-2.9 0.856-3.577 2.211l-11.999 24c-0.62 1.24-0.554 2.713 0.175 3.893 0.729 1.178 2.016 1.896 3.402 1.896h23.997c1.387 0 2.674-0.718 3.402-1.896 0.729-1.18 0.795-2.653 0.176-3.893zM17.998 27c0 0.553-0.447 1-1 1h-2c-0.553 0-1-0.447-1-1v-2c0-0.553 0.447-1 1-1h2c0.553 0 1 0.447 1 1v2zM17.998 19c0 0.553-0.447 1-1 1h-2c-0.553 0-1-0.447-1-1v-10c0-0.552 0.447-1 1-1h2c0.553 0 1 0.448 1 1v10z"></path>
    </svg>
  );
};

const listFeatures = {
  features: [
    {
      id: 1, title: 'Ultimate Javascript', img: <NotFound width="5em" height="5em" iconTitle="NotFound" fill="#777" />, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi odit libero soluta excepturi quod. Rem error incidunt ut sed non ipsum ex, officiis sunt quisquam voluptates a vel tempora?'
    },
    {
      id: 2, title: 'Best css with SASS', img: <NotFound width="5em" height="5em" iconTitle="NotFound" fill="#777" />, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi odit libero soluta excepturi quod. Rem error incidunt ut sed non ipsum ex, officiis sunt quisquam voluptates a vel tempora?'
    },
    {
      id: 3, title: 'Generate optimize code with webpack', img: <NotFound width="5em" height="5em" iconTitle="NotFound" fill="#777" />, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi odit libero soluta excepturi quod. Rem error incidunt ut sed non ipsum ex, officiis sunt quisquam voluptates a vel tempora?'
    },
    {
      id: 4, title: 'Usign the best specifications', img: <NotFound width="5em" height="5em" iconTitle="NotFound" fill="#777" />, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi odit libero soluta excepturi quod. Rem error incidunt ut sed non ipsum ex, officiis sunt quisquam voluptates a vel tempora?'
    },
    {
      id: 5, title: 'Generate react apps', img: <NotFound width="5em" height="5em" iconTitle="NotFound" fill="#777" />, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi odit libero soluta excepturi quod. Rem error incidunt ut sed non ipsum ex, officiis sunt quisquam voluptates a vel tempora?'
    },
  ]
};

export default function Feactures() {
  return (
    <section className="section section-feactures">
      <Helmet>
        <title>Boilerplate Feactures</title>
        <meta
          name="description"
          content="This section shows the different characteristics of the boilerplate react"
        />
      </Helmet>

      <div className="wrapper">
        <h1 className="section-feactures__title">Boilerplate Feactures</h1>
        <div className="section-feactures__content">
          <ListBoxFeatures info={listFeatures} />
        </div>
      </div>
    </section>
  );
}
