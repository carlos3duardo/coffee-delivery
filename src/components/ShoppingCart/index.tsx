import { useContext } from 'react'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { CoffeeChangeAmount } from '../CoffeeChangeAmount'
import {
  ShoppingCartContainer,
  DrinkSelected,
  DrinkInfo,
  DrinkDetails,
  DrinkImage,
  DrinkCost,
  OrderCosts,
  OrderItem,
  ItemDescription,
  ItemCost,
  ConfirmCheckoutButton,
} from './styles'

export function ShoppingCart() {
  const { order } = useContext(ShoppingCartContext)

  const itemsCost = order.reduce((acc, item) => {
    return item.cost ? acc + item.amount * item.cost : 0
  }, 0)

  const shippingCost = 3.5

  return (
    <ShoppingCartContainer>
      {order.map((drink) => (
        <DrinkSelected key={drink.drinkId}>
          <DrinkInfo>
            <DrinkImage>
              <img src={drink.imagePath} alt="Drink image from above" />
            </DrinkImage>
            <DrinkDetails>
              <span>{drink.name}</span>
              <CoffeeChangeAmount
                drinkId={drink.drinkId}
                amountInOrder={drink.amount}
                size="sm"
                showAddToCartButton={false}
                showRemoveButton={true}
              />
            </DrinkDetails>
          </DrinkInfo>
          <DrinkCost>
            <span>R$</span>{' '}
            {drink.cost &&
              new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(drink.cost * drink.amount)}
          </DrinkCost>
        </DrinkSelected>
      ))}

      <OrderCosts>
        <OrderItem>
          <ItemDescription>Total de itens</ItemDescription>
          <ItemCost>
            R${' '}
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(itemsCost)}
          </ItemCost>
        </OrderItem>
        <OrderItem>
          <ItemDescription>Entrega</ItemDescription>
          <ItemCost>
            R${' '}
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(shippingCost)}
          </ItemCost>
        </OrderItem>
        <OrderItem total>
          <ItemDescription>Total</ItemDescription>
          <ItemCost>
            R${' '}
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(itemsCost + shippingCost)}
          </ItemCost>
        </OrderItem>
      </OrderCosts>

      <ConfirmCheckoutButton type="submit">
        Confirmar pedido
      </ConfirmCheckoutButton>
    </ShoppingCartContainer>
  )
}
