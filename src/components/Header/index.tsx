import { MapPin, ShoppingCart } from "phosphor-react";
import { Button, HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <figure><img src="images/coffee-delivery-header-logo.png" /></figure>
      <HeaderNavigation>
          <Button scheme="purpleLight"><MapPin size="1.125rem" weight="fill" /> João Pessoa, PB</Button>
          <Button scheme="yellowLight"><ShoppingCart size="1.125rem" weight="fill" /></Button>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
