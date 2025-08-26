import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightingGames, isLoading: isLoadingFighting } =
    useGetFightingGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sport"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFighting}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
