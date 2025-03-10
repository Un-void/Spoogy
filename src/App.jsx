import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'

const App = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App