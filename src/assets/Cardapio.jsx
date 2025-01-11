import { ItemMenu } from './ItemMenu';

const produtos = [
  {
    url: './img/calabresa.jpg',
    name: 'Calabresa',
    description:
      'Molho de tomate, mussarela, cebola, calabresa, catupiry, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
  {
    url: './img/4queijos.jpg',
    name: '4 Queijos',
    description:
      'Molho de tomate, mussarela, parmesão, cebola, provolone, queijo, tomate, orégano e azeitonas',
    price: 'R$ 39,90',
  },
  {
    url: './img/lombo.jpg',
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
                url={produtos.url}
                name={produtos.name}
                description={produtos.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
