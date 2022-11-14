import { CoffeeChangeAmount } from "../CoffeeChangeAmount";
import { CoffeeWidgetContainer, Cost, TagItem, TagList, WidgetFooter } from "./styles";

interface CoffeeWidgetProps {
  id: number;
  name: string;
  description: string;
  tags: string[];
  cost: number;
  imagePath: string;
}

export function CoffeeWidget({id, name, description, tags, cost, imagePath}: CoffeeWidgetProps) {
  return (
    <CoffeeWidgetContainer>

      <figure><img src={imagePath} alt={name} /></figure>

      <TagList>
        {tags.map((tag: string) => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </TagList>

      <h4>{name}</h4>
      <p>{description}</p>

      <WidgetFooter>
        <Cost><span>R$</span>{new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(cost) }</Cost>
        <CoffeeChangeAmount drinkId={id} showAddToCartButton={true} />
      </WidgetFooter>
    </CoffeeWidgetContainer>
  )
}
