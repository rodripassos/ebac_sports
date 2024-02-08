import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const valorTotalRedux = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotalRedux)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
