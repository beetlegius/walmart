export interface Product {
  id: number | null;
  type: string;
  attributes: {
    name: string;
    description: string;
    price: number;
  }
}