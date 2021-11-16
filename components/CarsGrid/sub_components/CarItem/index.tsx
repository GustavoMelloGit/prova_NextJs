import Image from "next/image";
import Card from "../Card";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CarItemContainer, CarPrice, Header } from "./styles";
import { ICarProps } from "../../../../models/Car";

interface ICarItem {
  car: ICarProps;
}
export default function CarItem({ car }: ICarItem) {
  return (
    <Card>
      <CarItemContainer>
        <Header>
          <h1>{car.brand}</h1>
          <BiDotsHorizontalRounded size={30} fill="#C8C8CA" />
        </Header>
        <h2>{car.model}</h2>
        <Image
          src={car.image}
          alt={car.brand + car.model}
          width={450}
          height={200}
        />
        <CarPrice>
          <sup>$</sup>
          {car.price}
          <span>/day</span>
        </CarPrice>
      </CarItemContainer>
    </Card>
  );
}
