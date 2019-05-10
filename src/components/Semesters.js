import React from "react";
import { Link } from "react-router-dom";
const Semesters = () => {
	return (
		<div className='container'>
			<div className='row '>
				<div className='col col-6'>
					<div className='list-group'>
						<span className='list-group-item list-group-item-action '>
							<Link to='/semester/semester-1'>SEMESTER-1</Link>
						</span>
						<span className='list-group-item list-group-item-action'>
							<Link to='/semester/semester-2'>SEMESTER-2</Link>
						</span>
						<span className='list-group-item list-group-item-action'>
							<Link to='/semester/semester-3'>SEMESTER-3</Link>
						</span>
						<span className='list-group-item list-group-item-action'>
							<Link to='/semester/semester-4'>SEMESTER-4</Link>
						</span>
						<span className='list-group-item list-group-item-action'>
							<Link to='/semester/semester-5'>SEMESTER-5</Link>
						</span>
						<span className='list-group-item list-group-item-action '>
							<Link to='/semester/semester-6'>SEMESTER-6</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Semesters;
