import '../assets/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export function Header(){


    return(
        <>
            <div className="bg-top"></div>

            <header className="width-fix mt-5">
        <div className="card">
            <div className="d-flex container-header">
                <div className="container-img">
                </div>

                <div className="infos">
                    <h1><b>Pizzaria Maluca</b></h1>
                    <div className="infos-sub">
                        <p className="status-open"><FontAwesomeIcon icon={faClock} size='1x'/> Aberta</p>
                        <Link className="link" to={'/sobre'}>Ver mais</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}


