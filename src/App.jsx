import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='deteil/:id' element={<Detail/>} />
      </Routes>
    </>
  )
}

export default App
