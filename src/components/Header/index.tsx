import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Button, ButtonBadge, HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  const { order } = useContext(ShoppingCartContext);

  console.log(order.length)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home"><figure><img src="images/coffee-delivery-header-logo.png" /></figure></NavLink>
      <HeaderNavigation>
          <Button scheme="purpleLight"><MapPin size="1.125rem" weight="fill" /> João Pessoa, PB</Button>
          <NavLink to="/checkout" title="Carrinho de compras">
            <Button scheme="yellowLight">
              <ShoppingCart size="1.125rem" weight="fill" />
              {order.length > 0 && <ButtonBadge>{order.length}</ButtonBadge>}
            </Button>
          </NavLink>
      </HeaderNavigation>
    </HeaderContainer>
  )
}
