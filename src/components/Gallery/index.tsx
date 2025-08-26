import { useState } from 'react'

import Section from '../Section'

import * as S from './styles'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

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
        <S.Items>
          {itens.map((media, index) => (
            <S.Item
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
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="icone fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
