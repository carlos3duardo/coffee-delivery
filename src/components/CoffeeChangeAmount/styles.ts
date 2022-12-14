import styled from 'styled-components'

export const ChangeAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  &.sm {
    button {
      height: 2rem;
      min-height: 2rem;
      min-width: auto;
    }
    input {
      font-size: 1rem;
      height: 2rem;
    }
  }
`

export const Counter = styled.div`
  background-color: ${(props) => props.theme.baseButton};
  display: flex;

  border-radius: 6px;
`

export const ChangeAmountButton = styled.button`
  padding-left: 0;
  padding-right: 0;

  color: ${(props) => props.theme.purple};

  &.decrease {
    padding-left: 0.5rem;
  }

  &.increase {
    padding-right: 0.5rem;
  }
`

export const AmountInput = styled.input`
  width: 1.5rem;
  background: transparent;
  border: 0;
  flex: 1;

  text-align: center;

  &:focus {
    outline: none;
  }
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.purpleDark};
  color: white;
  border-radius: 6px;
  padding: 0.5rem;
  min-height: 2.375rem;
  min-width: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  &:active {
    background-color: ${(props) => props.theme.purpleLight};
  }
`

export const RemoveFromCartButton = styled.button`
  background-color: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};

  border-radius: 6px;
  padding: 0.5rem;
  min-height: 2.375rem;
  min-width: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
