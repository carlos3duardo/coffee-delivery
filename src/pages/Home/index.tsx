import { HomeContainer } from './styles';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Cardapio } from '../../components/Cardapio';


export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
      <Cardapio />
    </HomeContainer>
  )
}
