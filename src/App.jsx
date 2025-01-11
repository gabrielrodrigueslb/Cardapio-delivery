import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './global.css'
import { Header } from './assets/Header'
import { Menu } from './assets/Menu';
import { Cardapio } from './assets/Cardapio';


function App() {
  
  return (
    <>
      <Header />
      <Menu />
      <Cardapio />
    </>
  )
}

export default App
