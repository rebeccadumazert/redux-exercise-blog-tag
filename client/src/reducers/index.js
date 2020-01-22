import { combineReducers } from 'redux';

import postsReducer from './posts';
import tagsReducer from './tags';

export default combineReducers({
  posts: postsReducer,
  tags: tagsReducer,
});
