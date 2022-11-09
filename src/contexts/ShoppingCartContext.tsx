import { createContext, ReactNode, useState } from "react";

import { coffeeList } from '../data/coffees';

type OrderItemProps = {
  coffeeId: number;
  name: string | undefined;
  amount: number;
  cost: number | undefined;
  imagePath: string | undefined;
}

type UpdateOrderProps = {
  coffeeId: number;
  amount: number;
}

interface ShoppingCartContextInterface {
  order: OrderItemProps[];
  updateOrder: (order: UpdateOrderProps) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextInterface);

interface ShoppingCartProviderInterface {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderInterface) {
  const [order, setOrder] = useState<OrderItemProps[]>([])

  function updateOrder({coffeeId, amount}: UpdateOrderProps) {
    const currentOrder = order.find((item) => item.coffeeId === coffeeId);

    const selectedDrink = coffeeList.find((drink) => drink.id === coffeeId);

    const updatedOrder = currentOrder
      ? []
      : setOrder([...order, {
        coffeeId,
        name: selectedDrink?.name,
        amount,
        cost: selectedDrink?.cost,
        imagePath: selectedDrink?.imagePath
      }]);

    if (currentOrder) {
      console.log('Esta bebida já está no pedido');
    } else {
      console.log('Esta bebida não está no pedido');
    }
  }

  console.log({order})

  return (
    <ShoppingCartContext.Provider value={{ order, updateOrder }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
