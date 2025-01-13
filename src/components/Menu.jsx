import '../assets/css/menu.css';
import { faPizzaSlice, faCocktail } from '@fortawesome/free-solid-svg-icons';
import { MenuButton } from './MenuButton';

export function Menu() {
  return (
    <>
      <section className="categoria width-fix mt-4">
        <div className="container-menu" id="listaCategorias">
          <MenuButton icon={faPizzaSlice} category=" Pizzas Tradicionais" />
          <MenuButton icon={faPizzaSlice} category=" Pizzas Doces" />
          <MenuButton icon={faCocktail} category=" Bebidas" />
        </div>
      </section>
    </>
  );
}
