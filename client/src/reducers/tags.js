import _ from 'lodash';
import { ADD_TAG } from '../actionsType';

const tagsReducer = (state = [], action) => {
  if (action.type === ADD_TAG) {
    const tags = [...state, ...action.payload];
    return _.uniq(tags);
  }
  return state;
};

export default tagsReducer;
