import React from "react"


const List = () =>  {

	const names = ["Mariana Jane", "Janeah", "Jadeiana", "Jaden"];

	// using array map()
	return (
		<>
		<h1>This is a List Elements</h1>
		<ul>
			{names.map(name =>
				<li key={name}>{name}</li>
			)}
			
		</ul>
		</>
	);
}

export default List