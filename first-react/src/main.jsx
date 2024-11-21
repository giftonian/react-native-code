import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LifecycleDemo from './examples/LifeCycleDemo'
import TestAPI from './examples/TestAPI'
import Counter from './examples/Counter'
import App from './App.jsx'
import './index.css'
//import MyApp from './examples/MyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifecycleDemo />       
  </StrictMode>,

)

// createRoot(document.getElementById('root')).render(
  
//   <Counter />
// )
