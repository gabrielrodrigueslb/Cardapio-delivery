import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function MenuButton(props) {
  return (
    <>
      <a href="#" className="item-categoria btn btn-white btn-sm mb-3 me-3 ">
        <FontAwesomeIcon icon={props.icon} size="1x" />
        &nbsp; {props.category}
      </a>
    </>
  );
}
