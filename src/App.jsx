import { useState } from 'react'
import Footer from './components/common/footer'
import Header from './components/common/header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='page'>
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
