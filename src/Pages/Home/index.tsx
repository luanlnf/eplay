import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../Models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 150,00'],
    image: resident
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo',
    category: 'Rpg',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    title: 'Zelda',
    category: 'Ação/RPG',
    system: 'Nintendo Switch',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['23/07'],
    image: zelda
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'Ação/RPG',
    system: 'Windows, PS5 & PS4',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['31/06'],
    image: starwars
  },
  {
    id: 8,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['23/07'],
    image: resident
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)
export default Home
