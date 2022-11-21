import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 4rem auto;
`

export const SuccessHeader = styled.header`
  h1 {
    font-family: ${(props) => props.theme.baseTitle};
    font-size: 2rem;
    color: ${(props) => props.theme.yellowDark};
  }

  p {
    font-family: ${(props) => props.theme.baseText};
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  margin-top: 2.5rem;
`

export const OrderInfo = styled.div`
  width: 100%;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
`

export const OrderInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background-color: ${(props) => props.theme.background};
  border-radius: calc(6px - 1px) calc(36px - 2px);
  margin: 1px;
`

export const OrderInfoItem = styled.div`
  display: flex;
  gap: 1rem;
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

export const Descricao = styled.div``

export const OrderShipping = styled.figure``
