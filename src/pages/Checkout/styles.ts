import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 4rem auto;
`
export type ColorIcon = 'purple' | 'yellowDark';
interface CardTitleProps {
  colorIcon?: ColorIcon;
}

export const CardTitle = styled.div<CardTitleProps>`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.baseSubtitle};

  figure {
    color: ${(props) => props.colorIcon === 'purple' ? props.theme.purple
      : props.colorIcon === 'yellowDark' ? props.theme.yellowDark
      : props.theme.baseSubtitle};
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseText};
  }
`

export const OrderInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const Sidebar = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const CardFormAddress = styled.div`
  background-color: ${(props) => props.theme.baseCard};

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  border-radius: 6px;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 0.75rem;
  row-gap: 1rem;
`

interface GridItemProps {
  columnStart?: number;
  columnEnd?: number;
  rowStart?: number;
  rowEnd?: number;
  requiredField?: boolean;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column-start: ${(props) => props.columnStart ?? 'auto'};
  grid-column-end: ${(props) => props.columnEnd ?? 'auto'};

  position: relative;

  &::before {
    color: ${(props) => props.theme.baseLabel};
    display: ${(props) => !props.requiredField ? 'block' : 'none'};
    position: absolute;
    content: 'Opcional';
    font-size: 0.75rem;
    line-height: 0.75rem;
    font-style: italic;
    right: 0.75rem;

    top: calc(50% - (0.75rem/2));
  }
`

interface FormInputProps {
  required?: boolean;
}

export const FormInput = styled.input<FormInputProps>`
  color: ${(props) => props.theme.baseText};
  background-color: ${(props) => props.theme.baseInput};

  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;

  width: 100%;
  padding: 0.75rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.yellowDark};
  }

  &::placeholder {
    color: ${(props) => props.theme.baseLabel}
  }
`

export const CardPaymentMethod = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;

  border-radius: 6px;
`

export const CardPaymentMethodOptions = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    list-style: none;

    li {
      input {
        width: 0;
        height: 0;
        position: absolute;
        left: -9999px;

        & + label {
          background-color: ${(props) => props.theme.baseButton};
          text-transform: uppercase;
          font-size: 0.75rem;
          padding: 1rem;
          border-radius: 6px;

          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;

          cursor: pointer;

          border: 1px solid transparent;

          transition: all 0.2s ease;

          &:hover {
            background-color: ${(props) => props.theme.baseHover};
          }
        }

        &:checked + label {
          background-color: ${(props) => props.theme.purpleLight};
          border: 1px solid ${(props) => props.theme.purple};
        }
      }

    }
  }
`
