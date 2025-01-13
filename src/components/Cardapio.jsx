import '../assets/css/cardapio.css';
import { ItemMenu } from './ItemMenu';

export const produtos = [
  {
    id: 1,
    url: './img/calabresa.jpg',
    name: 'Calabresa',
    description:
      'Molho de tomate, mussarela, cebola, calabresa, catupiry, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
  {
    id: 2,
    url: './img/4queijos.jpg',
    name: '4 Queijos',
    description:
      'Molho de tomate, mussarela, parmesão, cebola, provolone, queijo, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
  {
    id: 3,
    url: './img/lombo.jpg',
    name: 'Lombo com Calabresa',
    description:
      'Molho de tomate, mussarela, lombo, cebola, calabresa, catupiry, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
  {
    id: 4,
    url: './img/romeuejulieta.jpg',
    name: 'Lombo com Calabresa',
    description:
      'Molho de tomate, mussarela, lombo, cebola, calabresa, catupiry, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
];

export function Cardapio() {
  return (
    <>
      <section className="lista width-fix mt-0 pb-5" id="listaItensCardapio">
        <div className="container-group mb-5">
          <p className="title-categoria">
            <b>Pizzas Tradicionais</b>
          </p>

          {produtos.map((produtos) => {
            return (
              <ItemMenu
                key={produtos.id}
                url={produtos.url}
                name={produtos.name}
                description={produtos.description}
                price={produtos.price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
