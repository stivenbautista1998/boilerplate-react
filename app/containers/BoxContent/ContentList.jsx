import React from 'react';
// import PropTypes from 'prop-types';
import Content from './Content';

function ContentList({ info, onClickHeart, onClickSee }) {
  const result = info.content.map((item) => <Content key={item.id} onClickHeart={onClickHeart} onClickSee={onClickSee} mytitle={item.title} img={item.img} text={item.content} />);
  return result;
}

export default ContentList;
