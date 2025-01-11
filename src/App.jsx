import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './global.css'
import { Header } from './assets/Header'
import { Menu } from './assets/Menu';
import { Cardapio } from './assets/Cardapio';
import { BottomMenu } from './assets/BottomMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import InfoProdutos from './InfoProdutos';




function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Item' element={<InfoProdutos/>} />
        <Route path='*' element={<h1>Not found 404</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
