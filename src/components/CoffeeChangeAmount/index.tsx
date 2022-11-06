import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddToCartButton, AmountInput, ChangeAmountButton, ChangeAmountContainer, Counter } from "./styles";

export function CoffeChangeAmount() {
  return (
    <ChangeAmountContainer>
      <Counter>
        <ChangeAmountButton className="decrease"><Minus weight="bold" size="1.125rem" /></ChangeAmountButton>
        <AmountInput defaultValue={1} readOnly />
        <ChangeAmountButton className="increase"><Plus weight="bold" size="1.125rem" /></ChangeAmountButton>
      </Counter>
      <AddToCartButton><ShoppingCart size="1.125rem" weight="fill" /></AddToCartButton>
    </ChangeAmountContainer>
  )
}
