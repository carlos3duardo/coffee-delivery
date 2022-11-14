import { useContext } from "react";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { CoffeeChangeAmount } from "../CoffeeChangeAmount";
import { ShoppingCartContainer, DrinkSelected, DrinkInfo, DrinkDetails, DrinkImage, DrinkCost } from "./styles";

export function ShoppingCart() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <ShoppingCartContainer>
      {order.length > 0 && (
        order.map((drink) => (
          <DrinkSelected key={drink.drinkId}>
            <DrinkInfo>
              <DrinkImage><img src={drink.imagePath} alt="Drink image from above" /></DrinkImage>
              <DrinkDetails>
                <span>{drink.name}</span>
                <CoffeeChangeAmount drinkId={drink.drinkId} amountInOrder={drink.amount} size="sm" showAddToCartButton={false} showRemoveButton={true} />
              </DrinkDetails>
            </DrinkInfo>
            <DrinkCost><span>R$</span> {drink.cost && new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(drink.cost * drink.amount) }</DrinkCost>
          </DrinkSelected>
        ))
      )}

      {!order.length && (
        <p>O seu carrinho de compras está vazio.</p>
      )}
    </ShoppingCartContainer>
  )
}
