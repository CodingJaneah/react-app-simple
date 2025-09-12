import React from "react"

const UserList = () => {

	const students = [
		{id: 1, name: "Mariana Jane", age: 23},
		{id: 2, name: "Janeah", age: 21},
		{id: 3, name: "Jadeiana", age: 26},

	]

	return(
		<>
			<h1>This is the Array of Objects</h1>
			<ul>
				{students.map(student =>
				<li key={student}>{student.name} is {student.age}</li>
				)}
			</ul>
		</>
	)
	
}	

export default UserList