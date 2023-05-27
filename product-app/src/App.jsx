import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Layouts/Header.jsx'
import Footer from './components/Layouts/Footer.jsx'
import ProductList from './components/Products/ProductList.jsx'

function App() {

  return (
    <>
    <Header customers={65656}/>
    <ProductList/>
    <Footer year={2023}/>
    </>
  )
}

export default App
