import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'
import Proyectos from '../pages/Proyectos'
import Galeria from '../pages/Galeria'


const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/galeria' element={<Galeria />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WebRoutes
