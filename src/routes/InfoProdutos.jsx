import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/css/InfoProdutos.css';

import { MenuButtonClosed } from '../components/MenuButtonClosed';
import { BottomMenu } from '../components/BottomMenu';
import { Options } from '../components/Options';

export default function InfoProdutos() {
  return (
    <div>
      <div className="bg-top details"></div>

      <header className="width-fix mt-3">
        <div className="card">
          <div className="d-flex container-header">
            <Link className="container-voltar" to={'/'}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="infos text-center">
              <h1 className="mb-0">
                <b>Detalhes do Produto</b>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="imagem width-fix mt-4">
        <div
          className="container-imagem-produto"
          style={{
            backgroundImage: "url('./img/calabresa.jpg')",
            backgroundSize: 'cover',
          }}
        ></div>

        <div className="card mb-2 ">
          <div className="d-flex">
            <div className="infos-produto">
              <p className="name mb-2">
                <b>Calabresa</b>
              </p>
              <p className="description mb-4">
                Molho de tomate, mussarela, cebola, calabresa, catupiry, tomate,
                orégano e azeitonas
              </p>
              <p className="price">
                <b>R$ 39,90</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Options />

      <BottomMenu />
      <MenuButtonClosed />
    </div>
  );
}
