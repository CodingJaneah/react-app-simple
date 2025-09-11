import React from "react"
import './App.css'
import Button from './Components/Button.jsx'

function App() {
  
  return (
    <>
	<div className="main-card">
		<Button name="Mariana Jane" age={23} favColor="Purple"/>
		<Button name="Janeah" age={21} favColor="Light Blue"/>
		<Button name="Jadeiana" age={26} favColor="Orange"/>
	</div>
    </>
  )
}

export default App
