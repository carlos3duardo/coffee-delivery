import { HomeContainer } from './styles';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';


export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro />
    </HomeContainer>
  )
}
