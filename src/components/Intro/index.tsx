import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Icone,
  ImageContainer,
  IntroContainer,
  IntroContent,
  ListaVantagens,
  TextContainer,
  Vantagem,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora
          </p>
          <ListaVantagens>
            <Vantagem>
              <Icone color="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </Icone>{' '}
              Compra simples e segura
            </Vantagem>
            <Vantagem>
              <Icone color="baseText">
                <Package size={16} weight="fill" />
              </Icone>{' '}
              Embalagem mantém o café intacto
            </Vantagem>
            <Vantagem>
              <Icone color="yellow">
                <Timer size={16} weight="fill" />
              </Icone>{' '}
              Entrega rápida e rastreada
            </Vantagem>
            <Vantagem>
              <Icone color="purple">
                <Coffee size={16} weight="fill" />
              </Icone>{' '}
              O café chega fresquinho até você
            </Vantagem>
          </ListaVantagens>
        </TextContainer>
        <ImageContainer>
          <img
            src="images/intro-image.png"
            alt="Copo de café com imagens de grãos de café ao redor"
          />
        </ImageContainer>
      </IntroContent>
    </IntroContainer>
  )
}
