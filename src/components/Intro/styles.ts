import styled from 'styled-components'

export const IntroContainer = styled.div`
  background-image: url(images/intro-background.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;

  padding: 5.75rem 0;
`

export const IntroContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  gap: 3rem;
`

export const TextContainer = styled.div`
  flex: 1;
  h1 {
    font-size: 3rem;
    line-height: 3.9rem;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin: 1rem 0;
  }
`

export const ListaVantagens = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;

  margin-top: 3.125rem;
`

export const Vantagem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconeProps {
  color?:
    | 'yellow'
    | 'yellowLight'
    | 'yellowDark'
    | 'purple'
    | 'purpleLight'
    | 'purpleDark'
    | 'baseText'
}

export const Icone = styled.figure<IconeProps>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 32px;
  color: #ffffff;
  background-color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.baseText};
`

export const ImageContainer = styled.figure`
  img {
    width: 476px;
    height: 360px;
  }
`
