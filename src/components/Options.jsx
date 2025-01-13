import '../assets/css/Options.css'
import { OptionsCards } from './OptionsCards'

export function Options() {
  return (
    <section className="opcionais width-fix mt-5 pb-5">
        <div className="container-group mb-5">
            <span className="badge">Obrigatório</span>
            <p className="title-categoria mb-0"><b>Deseja borda?</b></p>
            <span className="sub-title-categoria">escolha 1 opção</span>

            <OptionsCards
                name='Catupiry'
                price='8,90'
            />
            <OptionsCards
                name='Cheddar'
                price='8,95'
            />

        </div>

        <div className="container-group mb-5 ">
            <p className="title-categoria mb-0"><b>Adicionais</b></p>
            <span className="sub-title-categoria">escolha até 2 opções</span>

            <OptionsCards
                name='Bacon'
                price='3,50'
            />
            <OptionsCards
                name='Cebola'
                price='2,95'
            />

        </div>

        <div className="container-group mb-5">
            <p className="title-categoria mb-0"><b>Observações</b></p>
            <span className="sub-title-categoria">Informe alguma observação abaixo</span>
            <textarea className="form-control mt-2" rows="5"></textarea>
           

        </div>
        
        
    </section>
  )
}
