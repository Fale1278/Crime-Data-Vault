import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import Criminal from './Pages/view-criminal/View-criminal-record'


const App = () => {
  return (
    <div className='main-ody'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='View-criminal' element={<Criminal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App