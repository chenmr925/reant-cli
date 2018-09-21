import { NUM_INCREMENT, NUM_DECREMENT, increment, decrement } from "../actions";

const total = (state = 0, action) => {
	switch(action.type){
		case NUM_INCREMENT:
			return state + 1;
		case NUM_DECREMENT:
			return state - 1;
		default:
			return state;
	}
}

export default total;