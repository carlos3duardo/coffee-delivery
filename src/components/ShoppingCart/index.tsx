import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CoffeeChangeAmount } from "../CoffeeChangeAmount";
import { ShoppingCartContainer, DrinkSelected, DrinkInfo, DrinkDetails, DrinkImage, DrinkCost } from "./styles";

export function ShoppingCart() {
  const { order } = useContext(ShoppingCartContext);

  console.log(order)

  return (
    <ShoppingCartContainer>
      {order.length > 0 && (
        order.map((drink) => (
          <DrinkSelected key={drink.coffeeId}>
            <DrinkInfo>
              <DrinkImage><img src={drink.imagePath} alt="Drink image from above" /></DrinkImage>
              <DrinkDetails>
                <span>{drink.name}</span>
                <CoffeeChangeAmount coffeeId={drink.coffeeId} />
              </DrinkDetails>
            </DrinkInfo>
            <DrinkCost><span>R$</span> {drink.cost && new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(drink.cost * drink.amount) }</DrinkCost>
          </DrinkSelected>
        ))
      )}
    </ShoppingCartContainer>
  )
}
