import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  Descricao,
  Icone,
  OrderInfo,
  OrderInfoInner,
  OrderInfoItem,
  OrderShipping,
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
} from './styles'

export function Success() {
  const { order, deliveryAddress, payment, submitNewOrder } =
    useContext(ShoppingCartContext)

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContent>
        <OrderInfo>
          <OrderInfoInner>
            <OrderInfoItem>
              <Icone color="purple">
                <MapPin weight="fill" />
              </Icone>
              <Descricao>
                Entrega em{' '}
                <strong>
                  {deliveryAddress.rua} {deliveryAddress.numero}{' '}
                  {deliveryAddress.complemento}
                </strong>
                <br />
                {deliveryAddress.bairro} - {deliveryAddress.cidade},{' '}
                {deliveryAddress.uf}
              </Descricao>
            </OrderInfoItem>

            <OrderInfoItem>
              <Icone color="yellow">
                <Timer weight="fill" />
              </Icone>
              <Descricao>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </Descricao>
            </OrderInfoItem>

            <OrderInfoItem>
              <Icone color="yellowDark">
                <CurrencyDollarSimple />
              </Icone>
              <Descricao>
                Pagamento na entrega
                <br />
                <strong>{payment}</strong>
              </Descricao>
            </OrderInfoItem>
          </OrderInfoInner>
        </OrderInfo>
        <OrderShipping>
          <img src="/images/delivery-illustration.png" alt="" />
        </OrderShipping>
      </SuccessContent>
    </SuccessContainer>
  )
}
