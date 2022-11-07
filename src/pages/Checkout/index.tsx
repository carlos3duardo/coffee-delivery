import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, CardFormAddress, OrderInfo, CardPaymentMethod, ShoppingCart, Sidebar, CardTitle, FormGrid, GridItem, FormInput } from "./styles";

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

          <FormGrid>
            <GridItem columnStart={1} columnEnd={5} requiredField><FormInput type="text" name="cep" id="cep" placeholder="CEP" required /></GridItem>
            <GridItem columnStart={1} columnEnd={13} requiredField><FormInput type="text" name="rua" id="rua" placeholder="Rua" required /></GridItem>
            <GridItem columnStart={1} columnEnd={5} requiredField><FormInput type="text" name="numero" id="numero" placeholder="Número" required /></GridItem>
            <GridItem columnStart={5} columnEnd={13}><FormInput type="text" name="complemento" id="complemento" placeholder="Complemento" /></GridItem>
            <GridItem columnStart={1} columnEnd={5} requiredField><FormInput type="text" name="bairro" id="bairro" placeholder="Bairro" required /></GridItem>
            <GridItem columnStart={5} columnEnd={10} requiredField><FormInput type="text" name="cidade" id="cidade" placeholder="Cidade" required /></GridItem>
            <GridItem columnStart={10} columnEnd={13} requiredField><FormInput type="text" name="uf" id="uf" placeholder="UF" required /></GridItem>
          </FormGrid>
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
