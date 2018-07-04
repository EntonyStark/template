import { GET, SET } from '../Constants/ActionTypes';

export const get = payload => ({
  type: GET,
  payload,
});

export const set = payload => ({
  type: SET,
  payload,
});
