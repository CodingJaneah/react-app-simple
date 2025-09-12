import React from "react"


const List = () =>  {

	const names = ["Mariana Jane", "Janeah", "Jadeiana", "Jaden"];

	// using array map()
	return (
		<>
		<div className="text-blue-500 border-2 border-solid border-black rounded-md p-3 my-8 mx-8 w-100">
		<h1 className="font-bold text-xl inline">This is a List Elements</h1><span className="inline ml-25 cursor-pointer">Delete</span>
		<ul>
			{names.map(name =>
				<li key={name}>{name}</li>
			)}
			
		</ul>
		</div>
		
		</>
	);
}

export default List