import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Semesters from "./Semesters";
import Semester from "./Semester";

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Route exact path='/' component={Semesters} />
				<Route path='/semester/:semester' component={Semester} />
			</Router>
		</div>
	);
};

export default App;
