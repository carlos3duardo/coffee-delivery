type CoffeeProps = {
  id: number,
  name: string;
  description: string;
  tags: string[];
  cost: number;
  imagePath: string;
}

export const coffeeList:CoffeeProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    cost: 9.9,
    tags: ['Tradicional'],
    imagePath: 'images/coffees/expresso-tradicional.png'
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    cost: 9.9,
    tags: ['Tradicional'],
    imagePath: 'images/coffees/expresso-americano.png'
  },
  {
    id: 3,
    name: 'Expresso cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    cost: 9.9,
    tags: ['Tradicional'],
    imagePath: 'images/coffees/expresso-cremoso.png'
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    cost: 9.9,
    tags: ['Tradicional', 'Gelado'],
    imagePath: 'images/coffees/expresso-gelado.png'
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    cost: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imagePath: 'images/coffees/cafe-com-leite.png'
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    cost: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imagePath: 'images/coffees/latte.png'
  },
  {
    id: 7,
    name: 'Cappuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    cost: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imagePath: 'images/coffees/cappuccino.png'
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    cost: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imagePath: 'images/coffees/macchiato.png'
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    cost: 9.9,
    tags: ['Tradicional', 'Com leite'],
    imagePath: 'images/coffees/mocaccino.png'
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    cost: 9.9,
    tags: ['Especial', 'Com leite'],
    imagePath: 'images/coffees/chocolate-quente.png'
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    cost: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    imagePath: 'images/coffees/cubano.png'
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    cost: 9.9,
    tags: ['Especial'],
    imagePath: 'images/coffees/havaiano.png'
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    cost: 9.9,
    tags: ['Especial'],
    imagePath: 'images/coffees/arabe.png'
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    cost: 9.9,
    tags: ['Especial Alcoólico'],
    imagePath: 'images/coffees/irlandes.png'
  }
]
