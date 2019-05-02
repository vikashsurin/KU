import React, { useEffect } from "react";

const Links = ({ semester }) => {
	useEffect(() => {});

	const  std = () => {
		switch (semester) {
			case "semester-1":
				return {
					sem: "SEMESTER-1",
					a: "c1",
					b: "c2",
					c: "GEI",
					d: "MIL",
				};
			case "semester-2":
				return {
					sem: "SEMESTER-2",
					a: "c3",
					b: "c4",
					c: "GEII",
					d: "EVS",
				};
			case "semester-3":
				return {
					sem: "SEMESTER-3",
					a: "c5",
					b: "c6",
					c: "c7",
                    d: "GEIII",
                    e:'GK'
				};
			case "semester-4":
				return {
					sem: "SEMESTER-4",
					a: "c8",
					b: "c9",
					c: "c10",
                    d: "GEIV",
                    e:'PD'
				};
			case "semester-5":
				return {
					sem: "SEMESTER-5",
					a: "c11",
					b: "c12",
					c: "DSEI",
					d: "DSEII",
				};
			case "semester-6":
				return {
					sem: "SEMESTER-1",
					a: "c13",
					b: "c14",
					c: "DSEIII",
					d: "DSEIV",
				};
			default:
				return null;
		}
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<div className='row'>
						<span className='col font-weight-bold text-muted'>
							{std().sem}
						</span>
						<div className='col'>
							<span className='badge badge-pill badge-primary'>
								{std().a}
							</span>
							<span className='badge badge-pill badge-secondary '>
								{std().b}
							</span>
							<span className='badge badge-pill badge-success '>
								{std().c}
							</span>
							<span className='badge badge-pill badge-danger '>
								{std().d}
							</span>
							<span className='badge badge-pill badge-danger '>
                                {std().e == null?null : std().e }
							</span>
						</div>
						<div className='col'>
							<div className='btn-group'>
								<button
									className='btn btn-outline-primary btn-sm dropdown-toggle'
									type='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									Other Links
								</button>
								<div className='dropdown-menu'>
									<a className='dropdown-item' href='##'>
										Action
									</a>
									<a className='dropdown-item' href='##'>
										Another action
									</a>
									<a className='dropdown-item' href='##'>
										Something else here
									</a>
								</div>
								<div className='btn-group'>
									<button
										className='btn btn-sm dropdown-toggle btn-outline-danger'
										type='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										Youtube
									</button>
									<div className='dropdown-menu dropdown-menu-left '>
										<a className='dropdown-item' href='##'>
											Action
										</a>
										<a className='dropdown-item' href='##'>
											Another action
										</a>
										<a className='dropdown-item' href='##'>
											Something else here
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Links;
