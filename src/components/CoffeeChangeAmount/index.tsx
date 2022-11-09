import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { AddToCartButton, AmountInput, ChangeAmountButton, ChangeAmountContainer, Counter } from "./styles";

interface CoffeeChangeAmountProps {
  coffeeId: number;
}

export function CoffeeChangeAmount({ coffeeId }: CoffeeChangeAmountProps) {
  const [amount, setAmount] = useState(1);
  const { updateOrder } = useContext(ShoppingCartContext);

  function decreaseAmount() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function increaseAmount() {
    if (amount < 9) {
      setAmount(amount + 1);
    }
  }

  function handleUpdateOrder() {
    updateOrder({
      coffeeId: coffeeId,
      amount: amount
    })
  }

  return (
    <ChangeAmountContainer>
      <Counter>
        <ChangeAmountButton type="button" className="decrease" onClick={decreaseAmount}><Minus weight="bold" size="1.125rem" /></ChangeAmountButton>
        <AmountInput value={amount} readOnly />
        <ChangeAmountButton type="button" className="increase" onClick={increaseAmount}><Plus weight="bold" size="1.125rem" /></ChangeAmountButton>
      </Counter>
      <AddToCartButton onClick={handleUpdateOrder}><ShoppingCart size="1.125rem" weight="fill" /></AddToCartButton>
    </ChangeAmountContainer>
  )
}
