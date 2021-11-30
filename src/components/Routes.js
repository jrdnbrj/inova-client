import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'


const WebRoutes = ({ Navbar }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home Navbar={Navbar} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default WebRoutes
