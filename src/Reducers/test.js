import * as Types from '../Constants/ActionTypes';
import data from '../Utils/test';

const initialState = {
  data,
};

export default (state = initialState, { type /* payload*/ }) => {
  switch (type) {
    case Types.GET: {
      return {
        ...state,
        data: [...state.data, { name: 'GET', text: 'DUUUUUUDE' }],
      };
    }
    case Types.SET: {
      return {
        ...state,
        data: [...state.data, { name: 'SET', text: 'DUUUUUUDE' }],
      };
    }
    default:
      return state;
  }
};
