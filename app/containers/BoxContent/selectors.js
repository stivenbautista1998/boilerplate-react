/**
 * Box Cotent selectors
 */

import { createSelector } from 'reselect';
const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homestate) => homestate.get('username')
);

export {
  selectHome,
  makeSelectUsername
};

