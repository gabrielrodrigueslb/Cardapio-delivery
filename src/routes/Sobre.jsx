import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faMapMarkerAlt,
  faClock,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/css/Sobre.css';

export default function Sobre() {
  return (
    <div>
      <div className="bg-top sobre"></div>

      <header className="width-fix mt-3">
        <div className="card">
          <div className="d-flex container-header">
            <Link className="container-voltar" to={'/'}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div className="infos text-center">
              <h1 className="mb-0">
                <b>Sobre a loja</b>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="width-fix mt-5 mb-4">
        <div className="card">
          <div className="d-flex">
            <div
              className="container-img-sobre"
              style={{
                backgroundImage: "url('./img/logo.png')",
                backgroundSize: '75%',
              }}
            ></div>
            <div className="infos">
              <h1 className="title-sobre">
                <b>Pizzaria Maluca</b>
              </h1>
              <div className="infos-sub">
                <p className="sobre mb-2">
                  A Pizzaria Maluca é um lugar onde a tradição encontra a
                  criatividade. Fundada em 1995, nossa missão é oferecer pizzas
                  únicas e saborosas, preparadas com ingredientes frescos e
                  muita paixão. Com um cardápio que vai desde clássicos até
                  combinações malucas, como a famosa pizza de chocolate com
                  morango e bacon, há opções para todos os gostos, incluindo
                  vegetarianas, veganas e sem glúten. Nosso ambiente é acolhedor
                  e descontraído, perfeito para momentos especiais com amigos e
                  familiares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lista width-fix mt-5 pb-5">
        <div className="container-group mb-5">
          <p className="title-categoria mb-0">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; <b>Endereço</b>
          </p>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              Rua exemplo, 123, Meu bairro, Betim/MG
            </p>
          </div>
        </div>

        <div className="container-group mb-5">
          <p className="title-categoria mb-0">
            <FontAwesomeIcon icon={faClock} /> &nbsp;{' '}
            <b>Horário de funcionamento</b>
          </p>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Segunda a sexta</b>
            </p>
            <p className="normal-text mb-0">18:00 às 23:00</p>
          </div>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Sábado</b>
            </p>
            <p className="normal-text mb-0">18:00 às 23:00</p>
          </div>
        </div>

        <div className="container-group mb-5">
          <p className="title-categoria mb-0">
            <FontAwesomeIcon icon={faCoins} /> &nbsp; <b>Formas de pagamento</b>
          </p>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Crédito</b>
            </p>
          </div>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Débito</b>
            </p>
          </div>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Dinheiro</b>
            </p>
          </div>
          <div className="card mt-2">
            <p className="normal-text mb-0">
              <b>Pix</b>
            </p>
          </div>
        </div>
      </section>

      <Link className="btn-yellow btn-full voltar" to={'/'}>
        Voltar para o cardápio
      </Link>

      <section className="menu-bottom disabled hidden" id="menu-bottom-closed">
        <p className="mb-0">
          <b>Loja fechada no momento.</b>
        </p>
      </section>
    </div>
  );
}
