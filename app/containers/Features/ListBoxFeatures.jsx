import React from 'react';
import BoxFeatures from './BoxFeatures';

export default function ListBoxFeatures({ info }) {
  const listBox = info.features.map((item) => <BoxFeatures key={item.id} title={item.title} img={item.img} text={item.text} />);
  return listBox;
}
