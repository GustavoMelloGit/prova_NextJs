//Utils
import { useRouter } from "next/router";
import api from "@mocks/cars.json";
//Styles
import { CarGrid, Container } from "./styles";
//Components
import CarItem from "./sub_components/CarItem";

export default function CarsGrid(): JSX.Element {
  const router = useRouter();
  function handleCarClicked(id: number) {
    router.push(`/car/${id}`);
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
