import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { AddToCartButton, AmountInput, ChangeAmountButton, ChangeAmountContainer, Counter, RemoveFromCartButton } from "./styles";

interface CoffeeChangeAmountProps {
  coffeeId: number;
  size?: 'sm' | 'md' | undefined;
  showAddToCartButton?: boolean;
  showRemoveButton?: boolean;
}

export function CoffeeChangeAmount({ coffeeId, size, showAddToCartButton, showRemoveButton }: CoffeeChangeAmountProps) {
  const [amount, setAmount] = useState(1);
  const { updateOrder } = useContext(ShoppingCartContext);

  function decreaseAmount() {
    if (amount > 1) {
      setAmount(amount - 1);
    }

    if (!showAddToCartButton) {
      handleUpdateOrder()
    }
  }

  function increaseAmount() {
    if (amount < 9) {
      setAmount(amount + 1);
    }

    if (!showAddToCartButton) {
      handleUpdateOrder()
    }
  }

  function handleUpdateOrder() {
    updateOrder({
      coffeeId: coffeeId,
      amount: amount
    })
  }

  return (
    <ChangeAmountContainer className={size || 'md'}>
      <Counter>
        <ChangeAmountButton
          type="button"
          className="decrease"
          onClick={decreaseAmount}
        >
          <Minus weight="bold" size={size == 'sm' ? '0.75rem' : '1.125rem'} />
        </ChangeAmountButton>
        <AmountInput value={amount} readOnly />
        <ChangeAmountButton type="button" className="increase" onClick={increaseAmount}><Plus weight="bold" size={size == 'sm' ? '0.75rem' : '1.125rem'} /></ChangeAmountButton>
      </Counter>
      {showAddToCartButton && <AddToCartButton onClick={handleUpdateOrder}><ShoppingCart size={size == 'sm' ? '1rem' : '1.125rem'} weight="fill" /></AddToCartButton>}
      {showRemoveButton && <RemoveFromCartButton onClick={handleUpdateOrder}><Trash size={size == 'sm' ? '1rem' : '1.125rem'} /> Remover</RemoveFromCartButton>}
    </ChangeAmountContainer>
  )
}
