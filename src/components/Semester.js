import React from "react";
import Links from "./Links";
const Semester = (props) => {
	return (
		<div className='container'>
			<Links semester={props.match.params.semester} />
			<hr />
		</div>
	);
};

export default Semester;
