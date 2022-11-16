import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  AddToCartButton,
  AmountInput,
  ChangeAmountButton,
  ChangeAmountContainer,
  Counter,
  RemoveFromCartButton,
} from './styles'

interface CoffeeChangeAmountProps {
  drinkId: number
  amountInOrder?: number
  size?: 'sm' | 'md' | undefined
  showAddToCartButton?: boolean
  showRemoveButton?: boolean
}

export function CoffeeChangeAmount({
  drinkId,
  amountInOrder,
  size,
  showAddToCartButton,
  showRemoveButton,
}: CoffeeChangeAmountProps) {
  const [amount, setAmount] = useState(amountInOrder || 1)
  const { addDrinkToOrder, removeDrinkFromOrder } =
    useContext(ShoppingCartContext)

  function decreaseAmount() {
    if (amount > 1) {
      const newAmount = amount - 1

      setAmount(newAmount)

      if (!showAddToCartButton) {
        addDrinkToOrder({ drinkId, amount: newAmount })
      }
    }
  }

  function increaseAmount() {
    if (amount < 9) {
      const newAmount = amount + 1

      setAmount(newAmount)

      if (!showAddToCartButton) {
        addDrinkToOrder({ drinkId, amount: newAmount })
      }
    }
  }

  function handleUpdateOrder() {
    addDrinkToOrder({ drinkId, amount })
  }

  function handleRemoveDrink() {
    removeDrinkFromOrder(drinkId)
  }

  return (
    <ChangeAmountContainer className={size || 'md'}>
      <Counter>
        <ChangeAmountButton
          type="button"
          className="decrease"
          onClick={decreaseAmount}
        >
          <Minus weight="bold" size={size === 'sm' ? '0.75rem' : '1.125rem'} />
        </ChangeAmountButton>
        <AmountInput value={amount} readOnly />
        <ChangeAmountButton
          type="button"
          className="increase"
          onClick={increaseAmount}
        >
          <Plus weight="bold" size={size === 'sm' ? '0.75rem' : '1.125rem'} />
        </ChangeAmountButton>
      </Counter>
      {showAddToCartButton && (
        <AddToCartButton type="button" onClick={handleUpdateOrder}>
          <ShoppingCart
            size={size === 'sm' ? '1rem' : '1.125rem'}
            weight="fill"
          />
        </AddToCartButton>
      )}
      {showRemoveButton && (
        <RemoveFromCartButton type="button" onClick={handleRemoveDrink}>
          <Trash size={size === 'sm' ? '1rem' : '1.125rem'} /> Remover
        </RemoveFromCartButton>
      )}
    </ChangeAmountContainer>
  )
}
