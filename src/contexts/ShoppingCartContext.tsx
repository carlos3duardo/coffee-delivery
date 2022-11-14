import { createContext, ReactNode, useState } from "react";

import { coffeeList } from '../data/coffees';

type OrderItemProps = {
  drinkId: number;
  name: string | undefined;
  amount: number;
  cost: number | undefined;
  imagePath: string | undefined;
}

type UpdateOrderProps = {
  drinkId: number;
  amount: number;
}

type AddDrinkToOrderProps = {
  drinkId: number;
  amount: number;
}

interface ShoppingCartContextInterface {
  order: OrderItemProps[];
  addDrinkToOrder: (drink: AddDrinkToOrderProps) => void;
  removeDrinkFromOrder: (drinkId: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextInterface);

interface ShoppingCartProviderInterface {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderInterface) {
  const [order, setOrder] = useState<OrderItemProps[]>([])

  function addDrinkToOrder({drinkId, amount}: AddDrinkToOrderProps) {
    const selectedDrink = coffeeList.find((drink) => drink.id === drinkId);
    const isDrinkAlreadySelected = order.find((drink) => drink.drinkId === drinkId);

    if (isDrinkAlreadySelected) {

      const updatedOrder = order.map((drink) => {
        if (drink.drinkId === drinkId) {
          return {
            drinkId: drink.drinkId,
            name: drink.name,
            amount,
            cost: drink.cost,
            imagePath: drink.imagePath
          }
        }

        return drink;
      });

      setOrder(updatedOrder);
    } else {
      setOrder([...order, {
        drinkId,
        name: selectedDrink?.name,
        amount,
        cost: selectedDrink?.cost,
        imagePath: selectedDrink?.imagePath
      }]);
    }
  }

  function removeDrinkFromOrder(drinkId: number) {
    const updatedOrder = order.filter((drink) => (drinkId !== drink.drinkId));

    setOrder(updatedOrder);
  }

  return (
    <ShoppingCartContext.Provider value={{ order, addDrinkToOrder, removeDrinkFromOrder }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
