import { createContext, ReactNode, useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

import { coffeeList } from '../data/coffees'

type OrderItemProps = {
  drinkId: number
  name: string | undefined
  amount: number
  cost: number | undefined
  imagePath: string | undefined
}

type AddDrinkToOrderProps = {
  drinkId: number
  amount: number
}

type DeliveryAddressProps = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

type SubmitOrderForm = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

interface ShoppingCartContextInterface {
  order: OrderItemProps[]
  deliveryAddress: DeliveryAddressProps
  payment: string
  addDrinkToOrder: (drink: AddDrinkToOrderProps) => void
  removeDrinkFromOrder: (drinkId: number) => void
  submitNewOrder: (data: SubmitOrderForm) => void
}

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextInterface,
)

interface ShoppingCartProviderInterface {
  children: ReactNode
}

export function ShoppingCartProvider({
  children,
}: ShoppingCartProviderInterface) {
  const [order, setOrder] = useState<OrderItemProps[]>(() => {
    const orderJson = localStorage.getItem('@coffeeDelivery:orderList')

    if (orderJson) {
      return JSON.parse(orderJson)
    }

    return []
  })

  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressProps>(
    () => {
      const address = localStorage.getItem('@coffeeDelivery:deliveryAddress')

      if (address) {
        return JSON.parse(address)
      }

      return {}
    },
  )

  const [payment, setPayment] = useState(() => {
    const selectedPayment = localStorage.getItem('@coffeeDelivery:payment')

    return selectedPayment || ''
  })

  const navigate = useNavigate()

  function addDrinkToOrder({ drinkId, amount }: AddDrinkToOrderProps) {
    const selectedDrink = coffeeList.find((drink) => drink.id === drinkId)
    const isDrinkAlreadySelected = order.find(
      (drink) => drink.drinkId === drinkId,
    )

    if (isDrinkAlreadySelected) {
      const updatedOrder = order.map((drink) => {
        if (drink.drinkId === drinkId) {
          return {
            drinkId: drink.drinkId,
            name: drink.name,
            amount,
            cost: drink.cost,
            imagePath: drink.imagePath,
          }
        }

        return drink
      })

      setOrder(updatedOrder)
    } else {
      setOrder([
        ...order,
        {
          drinkId,
          name: selectedDrink?.name,
          amount,
          cost: selectedDrink?.cost,
          imagePath: selectedDrink?.imagePath,
        },
      ])
    }
  }

  function removeDrinkFromOrder(drinkId: number) {
    const updatedOrder = order.filter((drink) => drinkId !== drink.drinkId)

    setOrder(updatedOrder)
  }

  function submitNewOrder(data: SubmitOrderForm) {
    const address = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
    }

    setDeliveryAddress(address)

    setPayment(data.pagamento)

    localStorage.setItem(
      '@coffeeDelivery:deliveryAddress',
      JSON.stringify(address),
    )

    localStorage.setItem('@coffeeDelivery:payment', data.pagamento)

    navigate('/success')
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(order)

    localStorage.setItem('@coffeeDelivery:orderList', stateJSON)
  }, [order])

  return (
    <ShoppingCartContext.Provider
      value={{
        order,
        deliveryAddress,
        payment,
        addDrinkToOrder,
        removeDrinkFromOrder,
        submitNewOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
