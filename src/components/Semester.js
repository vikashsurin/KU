import React from "react";
import Links from "./Links";
import CoreLinks from "./CoreLinks";

const Semester = (props) => {
	return (
		<div className='container'>
			<Links semester={props.match.params.semester} />
			<hr />
			<CoreLinks />
		</div>
	);
};

export default Semester;
