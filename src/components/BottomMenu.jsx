import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faUtensils,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import '../assets/css/BottomMenu.css';

export function BottomMenu() {
  return (
    <>
      <section className="menu-bottom" id="menu-bottom">
        <a className="menu-bottom-item active">
          <FontAwesomeIcon icon={faBookOpen} size="1x" />
          &nbsp; Cardápio
        </a>
        <a className="menu-bottom-item">
          <FontAwesomeIcon icon={faUtensils} size="1x" />
          &nbsp; Pedido
        </a>
        <a className="menu-bottom-item">
          <span className="badge-total-carrinho">2</span>
          {/* <FontAwesomeIcon icon={faShoppingCart} size="1x" />&nbsp;  */}
          Carrinho
        </a>
      </section>

      <section className="menu-bottom disabled hidden" id="menu-bottom-closed">
        <p className="mb-0">
          <b>Loja fechada no momento.</b>
        </p>
      </section>
    </>
  );
}
