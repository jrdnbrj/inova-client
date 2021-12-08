import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'


const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WebRoutes
