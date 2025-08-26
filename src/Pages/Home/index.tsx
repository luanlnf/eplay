import Banner from '../../components/Banner'

import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="promoções"
        background="gray"
        id="onSale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home
