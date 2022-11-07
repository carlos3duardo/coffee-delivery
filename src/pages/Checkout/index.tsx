import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, CardFormAddress, OrderInfo, CardPaymentMethod, ShoppingCart, Sidebar, CardTitle } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInfo>
        <h2>Complete seu pedido</h2>

        <CardFormAddress>
          <CardTitle colorIcon="yellowDark">
            <figure><MapPinLine size="1.25rem" /></figure>
            <div>
              Endereço de entrega
              <span>Informe o endereço onde deseja receber seu pedido.</span>
            </div>
          </CardTitle>
        </CardFormAddress>

        <CardPaymentMethod>
          <CardTitle colorIcon="purple">
            <figure><CurrencyDollar size="1.25rem" /></figure>
            <div>
              Pagamento
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
            </div>
          </CardTitle>
        </CardPaymentMethod>
      </OrderInfo>

      <Sidebar>
        <h2>Cafés selecionados</h2>
        <ShoppingCart>pedidos</ShoppingCart>
      </Sidebar>
    </CheckoutContainer>
  )
}
