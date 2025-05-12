import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreço } from '../ProductsList'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreço(game.prices.old)}</span>
          )}
          {game.prices.current && <>por {formataPreço(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button type="button" title="Adicionar ao carrinho" variant="primary">
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
