import CarItem from "./sub_components/CarItem";
import api from "../../data/api.json";
import { CarGrid, Container } from "./styles";
import { useRouter } from "next/router";

export default function CarsGrid(): JSX.Element {
  const router = useRouter();
  function handleCarClicked(id: number) {
    router.push(`/${id}`);
  }

  const cars = api.cars.map((car) => (
    <CarItem onClick={handleCarClicked} key={car.id} car={car} />
  ));

  return (
    <Container>
      <CarGrid>{cars}</CarGrid>
    </Container>
  );
}
