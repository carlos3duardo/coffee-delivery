import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  Button,
  ButtonBadge,
  HeaderContainer,
  HeaderNavigation,
} from './styles'

export function Header() {
  const { order } = useContext(ShoppingCartContext)

  const drinksAmount = order.reduce((acc, drink) => {
    return acc + drink.amount
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <figure>
          <img src="images/coffee-delivery-header-logo.png" alt="Logotipo" />
        </figure>
      </NavLink>
      <HeaderNavigation>
        <Button scheme="purpleLight">
          <MapPin size="1.125rem" weight="fill" /> João Pessoa, PB
        </Button>
        <NavLink to="/checkout" title="Carrinho de compras">
          <Button scheme="yellowLight">
            <ShoppingCart size="1.125rem" weight="fill" />
            {drinksAmount > 0 && <ButtonBadge>{drinksAmount}</ButtonBadge>}
          </Button>
        </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
