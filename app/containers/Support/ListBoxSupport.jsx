import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BoxSupport from './BoxSupport';

export default function ListBoxSupport({ info }) {
  ListBoxSupport.propTypes = {
    info: PropTypes.object
  };
  const listAll = info.support.map((item) => <BoxSupport key={item.id} title={item.title} img={item.img} text={item.text} />);

  return (
    <Fragment>
      {listAll}
    </Fragment>
  );
}
