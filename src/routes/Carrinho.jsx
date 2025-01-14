import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPencilAlt, faMotorcycle, faCreditCard, faCoins, faPlusCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Carrinho.css'
import { HeaderAlt } from '../components/HeaderAlt';



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
        
    <section className="opcionais width-fix mt-5 pb-5">
        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Escolha uma opção</b></p>
            <span className="sub-title-categoria">Como quer receber o pedido?</span>

            <div className="card card-opcionais mt-2">
                <div className="infos-produto-opcional">
                    <p className="name mb-0"><b>Entrega (60-90min)</b></p>
                </div>
                <div className="checks">
                    <label className="container-check">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className="card card-opcionais mt-2">
                <div className="infos-produto-opcional">
                    <p className="name mb-0"><b>Retirar no estabelecimento</b></p>
                </div>
                <div className="checks">
                    <label className="container-check">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

        </div>

        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Qual o seu endereço?</b></p>
            <span className="sub-title-categoria">Informe o endereço da entrega</span>

            <div className="card card-select mt-2">
                <div className="infos-produto-opcional">
                    <p className="mb-0 color-primary">
                    <FontAwesomeIcon icon={faPlusCircle} />&nbsp;
                        Nenhum endereço selecionado
                    </p>
                </div>
            </div>

            <div className="card card-address mt-2">
                <div className="img-icon-details">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div className="infos">
                    <p className="name mb-0"><b>Rua Exemplo, 123, Meu Bairro</b></p>
                    <span className="text mb-0">
                        Cidade-MG / 12345-678
                    </span>
                </div>
                <div className="icon-edit">
                <FontAwesomeIcon icon={faPencilAlt} />
                </div>
            </div>

        </div>

        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Nome e Sobrenome</b></p>
            <span className="sub-title-categoria">Como vamos te chamar?</span>

            <input type="text" className="form-control mt-2" placeholder="* Informe o nome e sobrenome" required/>

        </div>

        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Número do seu celular</b></p>
            <span className="sub-title-categoria">Para mais informações do pedido</span>

            <input type="number" className="form-control mt-2" placeholder="(00) 00000-0000" required/>

        </div>

        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Forma de pagamento</b></p>
            <span className="sub-title-categoria">* Pagamento na entrega</span>

            <div className="card card-select mt-2">
                <div className="infos-produto-opcional">
                    <p className="mb-0 color-primary">
                    <FontAwesomeIcon icon={faPlusCircle} />&nbsp;
                        Nenhuma forma selecionado
                    </p>
                </div>
            </div>

            <div className="card card-address mt-2">
                <div className="img-icon-details">
                   {/* <FontAwesomeIcon icon={faCoins} /> */}
                   <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <div className="infos">
                    <p className="name mb-0"><b>Cartão de Crédito</b></p>
                    <span className="text mb-0">
                        Levar maquininha
                    </span>
                </div>
                <div className="icon-edit">
                <FontAwesomeIcon icon={faPencilAlt} />
                </div>
            </div>

        </div>

    </section>




    <a href="./index.html" className="btn-yellow btn-full ">Fazer Pedido <span>R$106,50</span></a>

    

    

    </main>
  );
}
