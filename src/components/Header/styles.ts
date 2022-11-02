import styled from 'styled-components';

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

export type ButtonScheme = 'purpleLight' | 'purpleDark' | 'yellowLight' | 'yellowDark';

interface ButtonProps {
  scheme?: ButtonScheme;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.scheme === 'purpleLight' ? props.theme.purpleLight
    : props.scheme === 'purpleDark' ? props.theme.purpleDark
    : props.scheme === 'yellowLight' ? props.theme.yellowLight
    : props.scheme === 'yellowDark' ? props.theme.yellowDark
    : props.theme.baseButton};
  color: ${props => props.scheme === 'purpleLight' ? props.theme.purpleDark
    : props.scheme === 'purpleDark' ? props.theme.purpleLight
    : props.scheme === 'yellowLight' ? props.theme.yellowDark
    : props.scheme === 'yellowDark' ? props.theme.yellowLight
    : props.theme.baseText}
`
