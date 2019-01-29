import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPeople } from "../../usersService.js";

export default class People extends Component {
	constructor() {
		super();
		this.state = {
			people: []
		};
	}

	componentDidMount() {
		// axios call would go here to get data
		let people = getPeople(); // getting people data from service file
		this.setState({
			people: people // updating state with people data
		});
	}

	render() {
		const people = this.state.people.map((e, i) => {
			return (
				<h3 key={e.id}>
					<Link to={`/people/${e.id}`}>{e.name}</Link>
				</h3>
			);
		});
		return (
			<div>
				<h1>This is the people component</h1>
				{people}
			</div>
		);
	}
}
