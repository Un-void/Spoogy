import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App'
import { RouterProvider } from 'react-router'
import appRouter from './routing/appRouter'

createRoot(document.getElementById('root')).render(
    <>
     <RouterProvider router={appRouter} />
    </>
)