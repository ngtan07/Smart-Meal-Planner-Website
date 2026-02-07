import { useState } from 'react'
import Footer from './components/common/footer'
import Header from './components/common/header'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout


const App = () => {

  return (
    <Layout style={{
      minHeight: '100vh',
      background: 'transparent',
    }}>

      <Header />

      <Content style={{ flex: '1 0 auto' }}>
        <div className='child'>
          <Outlet />
        </div>
      </Content>

      <Footer />
    </Layout>

  )
}


export default App
