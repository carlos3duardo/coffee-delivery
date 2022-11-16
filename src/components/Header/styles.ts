import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 70rem;

  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  figure {
    img {
      display: block;
      width: 85px;
      height: 40px;
    }
  }
`

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 0.75rem;
`

export type ButtonScheme =
  | 'purpleLight'
  | 'purpleDark'
  | 'yellowLight'
  | 'yellowDark'

interface ButtonProps {
  scheme?: ButtonScheme
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.scheme === 'purpleLight'
      ? props.theme.purpleLight
      : props.scheme === 'purpleDark'
      ? props.theme.purpleDark
      : props.scheme === 'yellowLight'
      ? props.theme.yellowLight
      : props.scheme === 'yellowDark'
      ? props.theme.yellowDark
      : props.theme.baseButton};
  color: ${(props) =>
    props.scheme === 'purpleLight'
      ? props.theme.purpleDark
      : props.scheme === 'purpleDark'
      ? props.theme.purpleLight
      : props.scheme === 'yellowLight'
      ? props.theme.yellowDark
      : props.scheme === 'yellowDark'
      ? props.theme.yellowLight
      : props.theme.baseText};

  cursor: pointer;

  position: relative;
`

export const ButtonBadge = styled.span`
  color: white;
  background-color: ${(props) => props.theme.yellowDark};
  border-radius: 100px;

  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.25rem;
  min-width: 1.25rem;

  position: absolute;
  top: calc(-1rem / 2);
  right: calc(-1rem / 2);
`
