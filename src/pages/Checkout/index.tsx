import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '../../components/ShoppingCart'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  CheckoutContainer,
  CardFormAddress,
  OrderInfo,
  CardPaymentMethod,
  Sidebar,
  CardTitle,
  FormGrid,
  GridItem,
  FormInput,
  CardPaymentMethodOptions,
  EmptyOrderContainer,
} from './styles'

export function Checkout() {
  const { order, deliveryAddress, payment, submitNewOrder } =
    useContext(ShoppingCartContext)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cep: deliveryAddress.cep || '',
      rua: deliveryAddress.rua || '',
      numero: deliveryAddress.numero || '',
      complemento: deliveryAddress.complemento || '',
      bairro: deliveryAddress.bairro || '',
      cidade: deliveryAddress.cidade || '',
      uf: deliveryAddress.uf || '',
      pagamento: payment || '',
    },
  })

  function handleCheckoutOrder(data: any) {
    submitNewOrder(data)
  }

  if (!order.length) {
    return (
      <EmptyOrderContainer>
        Seu carrinho de compras está vazio.
        <br />
        Selecione a sua bebida na{' '}
        <NavLink to="/" title="Home">
          página principal
        </NavLink>{' '}
        para poder realizar um pedido.
      </EmptyOrderContainer>
    )
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCheckoutOrder)}>
      <OrderInfo>
        <h2>Complete seu pedido</h2>

        <CardFormAddress>
          <CardTitle colorIcon="yellowDark">
            <figure>
              <MapPinLine size="1.25rem" />
            </figure>
            <div>
              Endereço de entrega
              <span>Informe o endereço onde deseja receber seu pedido.</span>
            </div>
          </CardTitle>

          <FormGrid>
            <GridItem columnStart={1} columnEnd={5} requiredField>
              <FormInput
                type="text"
                id="cep"
                placeholder="CEP"
                required
                {...register('cep')}
              />
            </GridItem>
            <GridItem columnStart={1} columnEnd={13} requiredField>
              <FormInput
                type="text"
                id="rua"
                placeholder="Rua"
                required
                {...register('rua')}
              />
            </GridItem>
            <GridItem columnStart={1} columnEnd={5} requiredField>
              <FormInput
                type="text"
                id="numero"
                placeholder="Número"
                required
                {...register('numero')}
              />
            </GridItem>
            <GridItem columnStart={5} columnEnd={13}>
              <FormInput
                type="text"
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </GridItem>
            <GridItem columnStart={1} columnEnd={5} requiredField>
              <FormInput
                type="text"
                id="bairro"
                placeholder="Bairro"
                required
                {...register('bairro')}
              />
            </GridItem>
            <GridItem columnStart={5} columnEnd={10} requiredField>
              <FormInput
                type="text"
                id="cidade"
                placeholder="Cidade"
                required
                {...register('cidade')}
              />
            </GridItem>
            <GridItem columnStart={10} columnEnd={13} requiredField>
              <FormInput
                type="text"
                id="uf"
                placeholder="UF"
                required
                {...register('uf')}
              />
            </GridItem>
          </FormGrid>
        </CardFormAddress>

        <CardPaymentMethod>
          <CardTitle colorIcon="purple">
            <figure>
              <CurrencyDollar size="1.25rem" />
            </figure>
            <div>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </span>
            </div>
          </CardTitle>

          <CardPaymentMethodOptions>
            <ul>
              <li>
                <input
                  type="radio"
                  id="credito"
                  value="Cartão de Crédito"
                  required
                  {...register('pagamento')}
                />
                <label htmlFor="credito">
                  <CreditCard size="1rem" />
                  Cartão de Crédito
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="debito"
                  value="Cartão de Débito"
                  required
                  {...register('pagamento')}
                />
                <label htmlFor="debito">
                  <Bank size="1rem" /> Cartão de Débito
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="dinheiro"
                  value="Dinheiro"
                  required
                  {...register('pagamento')}
                />
                <label htmlFor="dinheiro">
                  <Money size="1rem" />
                  Dinheiro
                </label>
              </li>
            </ul>
          </CardPaymentMethodOptions>
        </CardPaymentMethod>
      </OrderInfo>

      <Sidebar>
        <h2>Cafés selecionados</h2>
        <ShoppingCart />
      </Sidebar>
    </CheckoutContainer>
  )
}
