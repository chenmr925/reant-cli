export const NUM_INCREMENT = "increment";
export const NUM_DECREMENT = "decrement";

export const increment = () => {
	return {
		type: NUM_INCREMENT
	}
}

export const incrementAsync = () => {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(increment());
		}, 1000)
	}
}

export const decrement = () => {
	return {
		type: NUM_DECREMENT
	}
}

export const decrementAsync = () => {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(decrement());
		}, 1000)
	}
}