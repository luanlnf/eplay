import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/car'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>

          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="clique aqui para acessar as categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="clique aqui para acessar a seção de em breve"
                  to="/#soon"
                >
                  Em Breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="clique aqui para acessar a seção de promoções"
                  to="/#onSale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span>- Produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="clique aqui para acessar as categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="clique aqui para acessar a seção de em breve"
              to="/#soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="clique aqui para acessar a seção de promoções"
              to="/#onSale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
