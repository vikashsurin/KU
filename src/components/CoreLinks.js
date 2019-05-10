import React from "react";
import { connect } from "react-redux";
import { addCore } from "../redux/actions";
const CoreLinks = (props) => {
	// console.log("i am ", core);
	console.log("i am props", props);

	return <div>elo</div>;
};

const mapStateToProps = (state) => {
	console.log(state.core.core);
	return {};
};
export default connect(
	mapStateToProps,
	{addCore}
)(CoreLinks);
