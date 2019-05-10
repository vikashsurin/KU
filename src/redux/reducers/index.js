import { combineReducers } from "redux";

const coreState = {
	core: "null",
};

const coreReducer = (state = coreState, action) => {
	switch (action.type) {
		case "ADD_CORE":
			return { ...state, core: action.payload };
		default:
			return state;
	}
};

export default combineReducers({
	core: coreReducer,
});
