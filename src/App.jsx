import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.module.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home.jsx';
import InfoProdutos from './routes/InfoProdutos.jsx';
import NotFound from './routes/NotFound.jsx';
import Sobre from './routes/Sobre.jsx';
import { Carrinho } from './routes/Carrinho.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<NotFound/>
  },
  {
    path:'detalhes',
    element:<InfoProdutos/>
  },
  {
    path:'sobre',
    element:<Sobre/>
  },
  {
    path:'carrinho',
    element:<Carrinho/>
  },
  {
    path:'',
    element:<NotFound/>
  },
  
  ])




export function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
