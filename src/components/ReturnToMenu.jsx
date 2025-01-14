import { Link } from 'react-router-dom';

export function ReturnToMenu() {
  return (
    <Link className="btn-yellow btn-full voltar" to={'/'}>
        Voltar para o cardápio
      </Link>
  )
}
