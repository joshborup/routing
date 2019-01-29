import React from "react";
import { Link } from "react-router-dom";

export default function About(props) {
	return (
		<div>
			<h1>This is the About component</h1>
			<Link to="/about/faq">
				<h3>FAQ</h3>
			</Link>
			<Link to="/about/company">
				<h3>Company</h3>
			</Link>
			{props.children}
		</div>
	);
}
