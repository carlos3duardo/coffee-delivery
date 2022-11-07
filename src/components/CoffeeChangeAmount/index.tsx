import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { AddToCartButton, AmountInput, ChangeAmountButton, ChangeAmountContainer, Counter } from "./styles";

export function CoffeChangeAmount() {
  const [amount, setAmount] = useState(1);

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

  return (
    <ChangeAmountContainer>
      <Counter>
        <ChangeAmountButton className="decrease" onClick={decreaseAmount}><Minus weight="bold" size="1.125rem" /></ChangeAmountButton>
        <AmountInput value={amount} readOnly />
        <ChangeAmountButton className="increase" onClick={increaseAmount}><Plus weight="bold" size="1.125rem" /></ChangeAmountButton>
      </Counter>
      <AddToCartButton><ShoppingCart size="1.125rem" weight="fill" /></AddToCartButton>
    </ChangeAmountContainer>
  )
}
