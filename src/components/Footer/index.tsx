import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Esportes"
              to="/categories#sport"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido </S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de Promoções"
              to="/#onSale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de Em Breve"
              to="/#soon"
            >
              Em Breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>

      <p>{currentYear} - &copy; EPLAY - Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
