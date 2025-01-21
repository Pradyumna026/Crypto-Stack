import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/coin/coin';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
