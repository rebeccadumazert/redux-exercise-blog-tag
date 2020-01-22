import { CREATE_POST } from '../actionsType';

const postsReducer = (state = [], action) => {
  if (action.type === CREATE_POST) {
    return [...state, action.payload];
  }
  return state;
};

export default postsReducer;
