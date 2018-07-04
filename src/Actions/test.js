import { GET, SET } from "../Constants/ActionTypes";

export const get = payload => {
	return {
		type: GET,
		payload
	};
};

export const set = payload => {
	return {
		type: SET,
		payload
	};
};
