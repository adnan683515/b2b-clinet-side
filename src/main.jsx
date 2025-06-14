import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import Provider from './Context/Provider.jsx'
import Cartprovider from './Context/Cartprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider>

      <Cartprovider>

        <RouterProvider router={router}>


        </RouterProvider>
        <ToastContainer></ToastContainer>

      </Cartprovider>

    </Provider>


  </StrictMode>,
)
