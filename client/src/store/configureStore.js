import { createStore } from 'redux';
import appReducer from '../reducers';

import { createPost, addTag } from '../actions';

const uniqID = require('uniq-id');

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(
  createPost({
    id: uniqID(),
    title: 'Les femmes dans la tech',
    description: 'blabliblablouliloulilalili',
    timestamp: Date.now(),
    tags: ['blabla', 'lifestyle', 'codestyle', 'javascript'],
  })
);
store.dispatch(
  createPost({
    id: uniqID(),
    title: 'Les hommes dans la tech',
    description: 'blabliblablouliloulilalilicergeg(tzefrgttge',
    timestamp: Date.now(),
    tags: ['tech', 'men', 'women'],
  })
);
store.dispatch(
  addTag([
    'tech',
    'men',
    'women',
    'blabla',
    'lifestyle',
    'codestyle',
    'javascript',
  ])
);
