import Button from '../Button'
import carrinhoVazio from '../../assets/images/carrinho-vazio.png'

import * as S from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/car'
import { getTotalPrice, parseToBrl } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const goToCHeckout = () => {
    navigate('/checkout')
    closeCart()
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCHeckout}
              title="clique aqui para continuar"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <S.CarrinhoVazio>
            <p className="empty-text">
              Seu carrinho esta vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
            <img src={carrinhoVazio} alt="carrinho vazio" />
          </S.CarrinhoVazio>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
