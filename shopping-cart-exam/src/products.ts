export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
}
export const products: Product[] = [
  {
    id: 1,
    name: 'Samssung Note 10',
    price: 1000,
    desc: 'made in Korea',
  },
  {
    id: 2,
    name: 'Samssung Note 20',
    price: 1200,
    desc: 'made in Korea',
  },
  {
    id: 3,
    name: 'iPhone X',
    price: 1300,
    desc: 'made in USA',
  },
  {
    id: 4,
    name: 'OPPO',
    price: 1300,
    desc: 'made in Taiwan',
  },
];
