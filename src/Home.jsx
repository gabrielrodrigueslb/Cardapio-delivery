import { Header } from './assets/Header';
import { Menu } from './assets/Menu';
import { Cardapio } from './assets/Cardapio';
import { BottomMenu } from './assets/BottomMenu';
import { Link } from 'react-router-dom';


export function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Link to={'/Item'}>Produtos</Link>
      <Cardapio />
      <BottomMenu />
    </>
  );
}
