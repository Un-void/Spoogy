import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import Header from '../src/components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from '../src/components/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <>
      <Header />
      <Body />
      <Footer />
    </>
)
