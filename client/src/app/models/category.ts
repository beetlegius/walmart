export interface Category {
  id: number | null;
  type: string;
  attributes: {
    name: string;
  }
  relationships: any
}