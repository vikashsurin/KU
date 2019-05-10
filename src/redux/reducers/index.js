import { combineReducers } from "redux";

const coreState = {
	core: 'c8',
};

const coreLists = {
	c8: ["kalhello", "bye", "ohyeah"],
	c9: ["i am c5"],
	c10: ["i am c10"],
	GEIV: ["i am GEIV"],
	PD: ["i am PD"],
};
const coreReducer = (state = coreState, action) => {
	switch (action.type) {
		case "ADD_CORE":
			return { ...state, core: action.payload };
		default:
			return state;
	}
};
const coreListsReducer = (state = coreLists, action) => {
	return state;
};
export default combineReducers({
	core: coreReducer,
	coreLists: coreListsReducer,
});
