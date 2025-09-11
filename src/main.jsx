import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";

console.log(React.version); // check the react version

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <App />
  </StrictMode>,
)


