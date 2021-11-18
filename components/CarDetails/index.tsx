import { useRouter } from "next/router";
import { ICarProps } from "../../models/Car";
import { CarHero, CarInfo, Container, ImageWrapper } from "./styles";
import Image from "next/image";
import CarDetailsButton from "./sub_components/Button";
import ImageCarousel from "../Carousel";
import { useState } from "react";
//Utils
//Styles
//Components
interface ICarDetailsProps {
  car: ICarProps | undefined;
}

export default function CarDetails({ car }: ICarDetailsProps) {
  const [selectedCar, setSelectedCar] = useState(0);
  const router = useRouter();

  if (!car) {
    return <div>Car not found</div>;
  }
  const { brand, model, price, image, logo, colors } = car;

  function handleBackToCatalog() {
    router.push("/");
  }

  return (
    <Container>
      <CarInfo>
        <div className="image">
          <Image src={logo} alt={brand + " logo"} width={300} height={400} />
        </div>
        <div>
          <h1>
            {brand} {model.toLowerCase()}
          </h1>
          <span>${price}/day</span>
        </div>
      </CarInfo>
      <CarHero>
        <CarDetailsButton
          arrowToLeft
          text="Back to catalog"
          onClick={handleBackToCatalog}
        />
        <ImageWrapper>
          <Image
            src={colors[selectedCar].image}
            alt={brand + model}
            width={700}
            height={350}
          />
        </ImageWrapper>
        <div className="color">
          <h1>01</h1>
          <span>Red</span>
        </div>
      </CarHero>
      <CarDetailsButton filled text="Book now" onClick={() => {}} />
      <ImageCarousel
        data={car}
        setSelectedCar={setSelectedCar}
        selectedCar={selectedCar}
      />
    </Container>
  );
}
