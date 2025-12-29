import { useState } from 'react'
import Footer from './components/common/footer'
import Header from './components/common/header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
