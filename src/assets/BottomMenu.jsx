import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUtensils,
    faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function BottomMenu() {
  return (
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
  );
}
