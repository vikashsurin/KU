import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<span className='navbar-brand' href='##'>
					<Link to='/'>KU</Link>
				</span>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarText'
					aria-controls='navbarText'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarText'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<span className='nav-link' href='##'>
								<Link to='/'>Home</Link>
								<span className='sr-only'>(current)</span>
							</span>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://drive.google.com/open?id=1uKdMYlGBxGCahjvdG-r_a1HIcMDEvvw9'
							>
								Syllabus
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='##'>
								More
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
