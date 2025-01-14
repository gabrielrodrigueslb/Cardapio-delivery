import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function HeaderAlt(props) {
  return (
    <header className="width-fix mt-3">
      <div className="card">
        <div className="d-flex container-header">
          <Link className="container-voltar" to={'/'}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <div className="infos text-center">
            <h1 className="mb-0">
              <b>{props.title}</b>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
