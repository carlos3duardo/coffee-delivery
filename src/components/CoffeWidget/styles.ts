import styled from "styled-components";

export const CoffeeWidgetContainer = styled.div`
  background-color: ${(props) => props.theme.baseCard};
  position: relative;
  padding: 0 1.25rem 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  figure {
    position: absolute;
    top: -20px;
    margin: 0 auto -20px auto;

    display: block;
    position: relative;

    width: 120px;
    height: 120px;


    img {
      display: block;
      width: inherit;
      height: inherit;
    }
  }

  h4 {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625;
  }

  p {
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: center;
  }
`

export const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.25rem;
  margin: .75rem auto 1rem auto;
`

export const TagItem = styled.li`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 100px;
`

export const WidgetFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Cost = styled.div`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.95rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.1375rem;
  }
`

export const Buy = styled.div`
`
