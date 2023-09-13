import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
    <h1 className='Hlo'>Hello World {count}</h1>
    <button onClick={()=>{
      setCount(++count)
    }}>Count</button>

      
    </>
  )
}

export default App
