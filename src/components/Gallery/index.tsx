import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../Pages/Home'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import spider from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spider
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/F6dZxoob8CY?si=uv8M65QZ6BToqIwW'
  }
]
type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}
const Gallery = ({ defaultCover, name, itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: '',
    type: 'image'
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: '',
      type: 'image'
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {itens.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  url: media.url,
                  type: media.type
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="icone fechar" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
