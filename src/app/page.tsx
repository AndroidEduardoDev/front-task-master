"use client"
import HomeComponent from '@/pages/home'
import LoginComponent from '@/pages/login'
import RegisterComponent from '@/pages/register'
import RecoverPasswordComponent from '@/pages/recover'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/recover' element={<RecoverPasswordComponent />} />
        <Route path='/home' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
