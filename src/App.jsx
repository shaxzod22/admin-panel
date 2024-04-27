import LoginPage from './pages/LoginPage'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import MarketingPage from './pages/MarketingPage'
import ZakazPage from './pages/ZakazPage'

function App() {
let userInfo = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <Routes>
     <Route path='/login' element={<LoginPage/>} />
     <Route path='/' element={userInfo?<DashboardPage/>:<Navigate to={`/login`} />} />
     <Route path='/marketing' element={<MarketingPage/>} />
     <Route path='/zakaz' element={<ZakazPage/>} />
    </Routes>
  )
}

export default App
