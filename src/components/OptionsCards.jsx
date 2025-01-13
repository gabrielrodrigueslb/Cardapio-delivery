import '../assets/css/OptionsCard.css';

export function OptionsCards(props) {
  return (
    <div className="card card-opcionais mt-2">
      <div className="infos-produto-opcional">
        <p className="name mb-0">
          <b>{props.name}</b>
        </p>
        <p className="price mb-0">
          <b>+ R$ {props.price}</b>
        </p>
      </div>
      <div className="checks">
        <label className="container-check">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
