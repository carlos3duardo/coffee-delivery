import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Button, HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home"><figure><img src="images/coffee-delivery-header-logo.png" /></figure></NavLink>
      <HeaderNavigation>
          <Button scheme="purpleLight"><MapPin size="1.125rem" weight="fill" /> João Pessoa, PB</Button>
          <NavLink to="/checkout" title="Carrinho de compras">
            <Button scheme="yellowLight"><ShoppingCart size="1.125rem" weight="fill" /></Button>
          </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
