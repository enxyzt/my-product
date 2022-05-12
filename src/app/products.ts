export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  qnt: number;
}

export const products = [
  {
    id: 0,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    qnt: 1
  },
  {
    id: 1,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    qnt: 1
  },
  {
    id: 2,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best camera',
    qnt: 1
  },
  {
    id: 3,
    name: 'Phone Pro',
    price: 999,
    description: 'A great phone with one of the best display',
    qnt: 1
  },
  {
    id: 4,
    name: 'Phone Pro Max',
    price: 1299,
    description: 'A great phone with one of the best complectation',
    qnt: 1
  }
];


