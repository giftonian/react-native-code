import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LifecycleDemo from './examples/LifeCycleDemo'
//import App from './App.jsx'
//import './index.css'
//import MyApp from './examples/MyApp.jsx'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <MyApp />    
  </StrictMode>,

)*/

createRoot(document.getElementById('root')).render(
  <LifecycleDemo />
)
