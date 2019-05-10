import React, { useEffect } from "react";
import { connect } from "react-redux";
const CoreLinks = (props) => {
	const core = props.core;
	useEffect(() => {
		console.log(core);
		console.log(props.list[core].map((m) => "i am " + m));
	});

	const renderList = props.list[core].map((list) => {
		return (
			<a href={list} key={list}>
				{list}{" "}
			</a>
		);
	});
	return <div>{renderList}</div>;
};

const mapStateToProps = (state) => {
	const list = state.coreLists;
	return { list: list, core: state.core.core };
};
export default connect(mapStateToProps)(CoreLinks);
