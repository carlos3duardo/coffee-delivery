import styled from 'styled-components'

export const CardapioContainer = styled.div``
export const CardapioContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto 4rem auto;

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    margin: 0;
  }
`

export const CardapioLista = styled.ul`
  margin-top: 3.375rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`
