import React from "react";
import { getCharacter } from "../../usersService.js";

export default function Character(props) {
	// This is returning the character object (or person object) based on the id that we are getting from the url through the params object

	const character = getCharacter(props.match.params.id);

	// We are rendering the character object below
	console.log(props);
	return (
		<div>
			<h1>{character.name}</h1>
			<p>{character.description}</p>
			<img src={character.image} />
		</div>
	);
}
