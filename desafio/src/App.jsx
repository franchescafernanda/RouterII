import React from 'react';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './views/Home'
import Characters from './views/Characters'
import NotFound from './views/NotFound'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:charactersCategory' element={<Characters />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App