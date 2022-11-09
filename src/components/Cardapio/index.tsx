import { CoffeeWidget } from "../CoffeWidget";
import { CardapioContainer, CardapioContent, CardapioLista } from "./styles";
import { coffeeList } from '../../data/coffees';

type CoffeeProps = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  cost: number;
  imagePath: string;
}

export function Cardapio() {
  return (
    <CardapioContainer>
      <CardapioContent>
        <h2>Nossos cafés</h2>

        <CardapioLista>
          {coffeeList.map(({id, name, description, tags, cost, imagePath}: CoffeeProps) => (
            <li key={id}><CoffeeWidget id={id} name={name} description={description} tags={tags} cost={cost} imagePath={imagePath} /></li>
          ))}
        </CardapioLista>
      </CardapioContent>
    </CardapioContainer>
  )
}
