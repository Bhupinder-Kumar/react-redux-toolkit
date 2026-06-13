import { useState } from 'react'
import Header from './Header'
import Product from './Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartList from './CartList'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Product /> } />
        <Route path="cart" element={ <CartList /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
