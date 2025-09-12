import React, { useState } from "react"
import './App.css'
import Button from './Components/Button.jsx'
import List from './Components/List.jsx'
import UserList from './Components/UserList.jsx'

function App() {
  // counter

  const [click, setClick] = useState(0)
	
  const handleClick = () => {
	const newValue = click + 1
	setClick(newValue)
	console.log("Count Value: " + newValue);
  }
 
  return (
    <>
	<div className="main-card">
		<Button name="Mariana Jane" age={23} favColor="Purple"/>
		<Button name="Janeah" age={21} favColor="Light Blue"/>
		<Button name="Jadeiana" age={26} favColor="Orange"/>
	</div>
	<br />
	<div>Count: {click}</div>
	<button id="increment" onClick={handleClick}>Increment</button>

	<br />
	<List />
	<UserList />
    </>
  )
}

export default App
