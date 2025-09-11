import React from "react"


const Button = (props) => {
	return (
		<>
		
			<div className="card">
				<h1>Button Element</h1>
				<p>This is for the button component</p>
				<button>Click</button>
				<p>Name: {props.name}</p>
				<p>Age: {props.age}</p>
				<p>Favorite Color: {props.favColor}</p>
			</div>
					
		</>
	)
}

export default Button