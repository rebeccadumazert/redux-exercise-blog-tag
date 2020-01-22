import { ADD_TAG } from '../actionsType';

export const addTag = tag => {
  return {
    type: ADD_TAG,
    payload: tag,
  };
};
