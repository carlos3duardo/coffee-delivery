import { HomeContainer } from './styles'
import { Intro } from '../../components/Intro'
import { Cardapio } from '../../components/Cardapio'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Cardapio />
    </HomeContainer>
  )
}
