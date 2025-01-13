
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Cardapio } from '../components/Cardapio';
import { BottomMenu } from '../components/BottomMenu';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Link to='/detalhes'>Produtos</Link>
      <Cardapio />
      <BottomMenu />
    </>
  );
}
