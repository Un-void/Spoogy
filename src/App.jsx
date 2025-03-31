import '../src/index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router'
import useOnline from './utils/useOnline.js' 

const App = () => {
  const isOnline = useOnline()
  return(
    <>
      <Header />
      <div className="relative">
        {!isOnline && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <p className="text-white text-lg font-semibold">You are offline</p>
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App