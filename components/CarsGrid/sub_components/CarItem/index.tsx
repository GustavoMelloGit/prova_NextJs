import Image from "next/image";
import Card from "../Card";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CarItemContainer, CarPrice, Header } from "./styles";
import { ICarProps } from "../../../../models/Car";
//Utils
//Styles
//Components
interface ICarItem {
  car: ICarProps;
  onClick: (id: number) => void;
}
export default function CarItem({ car, onClick }: ICarItem) {
  return (
    <Card>
      <CarItemContainer onClick={() => onClick(car.id)}>
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
