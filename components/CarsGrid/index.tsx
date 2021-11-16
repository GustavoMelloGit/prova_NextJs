import CarItem from "./sub_components/CarItem";
import api from "../../data/api.json";
import { CarGrid, Container } from "./styles";

export default function CarsGrid(): JSX.Element {
  const cars = api.cars.map((car) => <CarItem key={car.id} car={car} />);
  return (
    <Container>
      <CarGrid>{cars}</CarGrid>
    </Container>
  );
}
