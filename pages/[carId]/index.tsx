import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../data/api.json";
import { ICarProps } from "../../models/Car";
import { CarHero, CarInfo, Container, ImageWrapper } from "./styles";
import Image from "next/image";
import CarDetailsButton from "../../components/CarDetails/Button";
import Carousel from "../../components/Carousel";
import { useRouter } from "next/router";

interface ICarDetailsProps {
  car: ICarProps | undefined;
}
export default function CarDetailsPage({ car }: ICarDetailsProps) {
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
            src={colors[1].image}
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
      <Carousel data={car} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<ICarDetailsProps> = async ({
  params,
}) => {
  const carId = params!.carId;
  const car = api.cars.find((car) => car.id === Number(carId));

  return {
    props: {
      car: car,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const cars = api.cars;
  const paths = cars.map((car) => ({ params: { carId: car.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
