import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


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
                        <a href="#" className="link">Ver mais</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}


