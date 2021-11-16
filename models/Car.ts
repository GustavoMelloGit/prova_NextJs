export interface ICarProps {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  logo: string;
  colors: {
    id: number;
    color: string;
    image: string;
  }[];
}
