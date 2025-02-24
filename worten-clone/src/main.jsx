import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router"
import DashboardPage from './pages/dashboard/index.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<DashboardPage />}/>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
)