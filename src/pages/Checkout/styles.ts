import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 4rem auto;
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

export const CardFormAddress = styled.form`
  background-color: ${(props) => props.theme.baseCard};

  padding: 2.5rem;
  margin-bottom: 0.75rem;

  border-radius: 6px;
`

export const CardPaymentMethod = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  padding: 2.5rem;

  border-radius: 6px;
`

export type ColorIcon = 'purple' | 'yellowDark';
interface CardTitleProps {
  colorIcon?: ColorIcon;
}



export const CardTitle = styled.div<CardTitleProps>`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;

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

export const ShoppingCart = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px;
  padding: 2.5rem;
`
