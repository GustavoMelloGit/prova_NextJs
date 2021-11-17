import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../data/api.json";
import { ICarProps } from "../../models/Car";
import CarDetails from "../../components/CarDetails";
interface ICarDetailsProps {
  car: ICarProps | undefined;
}

export default function CarDetailsPage({ car }: ICarDetailsProps) {
  if (!car) {
    return <div>Car not found</div>;
  }
  return <CarDetails car={car} />;
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
