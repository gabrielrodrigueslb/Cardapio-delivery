import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPencilAlt, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Carrinho.css'
import { HeaderAlt } from '../components/HeaderAlt';
import { ReturnToMenu } from '../components/ReturnToMenu';
import { Options } from '../components/Options';
import { OptionsCards } from '../components/OptionsCards';


export function Carrinho() {
  return (
    <main>
        <div className="bg-top pedido"></div>

      <HeaderAlt 
        title='Seu carrinho'
      />

      <section className="carrinho width-fix mt-4 hidden">
        <div className="card card-address">
          <div className="img-icons-details">
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
          <div className="infos">
              <p className="name">
                <b>Seu carrinho está vazio</b>
              </p>
              <span className="text mb-0">
                Volte ao cardápio, selecione os itens e adicione ao seu
                carrinho.
              </span>
          </div>
        </div>
      </section>

      <section className="carrinho width-fix mt-4">
        <div className="card mb-2 pr-0">
            <div className="container-detahes">
                <div className="detalhes-produto">
                    <div className="infos-produto">
                        <p className="name"><b>1x Calabresa</b></p>
                        <p className="price"><b>R$ 39,90</b></p>
                    </div>

                    <div className="infos-produto">
                        <p className="name-opcional mb-0">1x Borda de Catupiry</p>
                        <p className="price-opcional mb-0">+ R$ 8,90</p>
                    </div>
                    <div className="infos-produto">
                        <p className="obs-opcional mb-0">- Observação para enviar talheres de plastico</p>
                    </div>
                </div>

                <div className="detalhes-produto-edit">
                <FontAwesomeIcon icon={faPencilAlt} />
                </div>
            </div>
        </div>

        <div className="card mb-2 pr-0">
            <div className="container-detahes">
                <div className="detalhes-produto">
                    <div className="infos-produto">
                        <p className="name"><b>1x 4 Queijos</b></p>
                        <p className="price"><b>R$ 39,90</b></p>
                    </div>

                    <div className="infos-produto">
                        <p className="name-opcional mb-0">1x Borda de Cheddar</p>
                        <p className="price-opcional mb-0">+ R$ 8,90</p>
                    </div>
                </div>

                <div className="detalhes-produto-edit">
                <FontAwesomeIcon icon={faPencilAlt} />
                </div>
            </div>
        </div>
        
                        

        <div className="card mb-2">

                <div className="detalhes-produto">
                    <div className="infos-produto">
                        <p className="name mb-0"><FontAwesomeIcon icon={faMotorcycle} /> <b>Taxa de entrega</b></p>
                        <p className="price mb-0"><b>+ R$ 15,00</b></p>
                    </div>                 
                </div>

        </div>

        <div className="card mb-2">
            <div className="detalhes-produto">
                <div className="infos-produto">
                    <p className="name-total mb-0"><b>Total</b></p>
                    <p className="price-total mb-0"><b>R$ 106,50</b></p>
                </div>                 
            </div>
        </div>
    </section>
        

  

    <ReturnToMenu/>

    </main>
  );
}
