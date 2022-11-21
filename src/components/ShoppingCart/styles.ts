import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const DrinkSelected = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding: 0.5rem 0.25rem 1.25rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  & + & {
    padding-top: 1.25rem;
  }
`

export const DrinkInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const DrinkImage = styled.figure`
  display: block;

  width: 64px;
  height: 64px;

  img {
    display: block;

    width: inherit;
    height: inherit;
  }
`

export const DrinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1;
`

export const DrinkCost = styled.div`
  font-weight: 700;
`

export const OrderCosts = styled.div`
  width: 100%;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  color: ${(props) => props.theme.baseText};
`

interface OrderItemProps {
  total?: boolean
}

export const ItemDescription = styled.div`
  text-align: left;
`

export const ItemCost = styled.div`
  text-align: right;
`

export const OrderItem = styled.div<OrderItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: ${(props) => (props.total ? 700 : 400)};

  ${ItemDescription} {
    font-size: ${(props) => (props.total ? '1.25rem' : '0.875rem')};
  }

  ${ItemCost} {
    font-size: ${(props) => (props.total ? '1.25rem' : '1rem')};
  }
`

export const ConfirmCheckoutButton = styled.button`
  display: block;
  width: 100%;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;

  padding: 0.75rem;

  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.yellowDark};
  }
`
