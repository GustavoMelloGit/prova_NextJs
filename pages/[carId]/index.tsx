//Utils
import { GetStaticPaths, GetStaticProps } from "next";
import api from "@data/api.json";
import Head from "next/head";
import { ICarProps } from "@models/Car";

//Components
import { CarDetails } from "@components/index";
interface ICarDetailsProps {
  car: ICarProps | undefined;
}

export default function CarDetailsPage({ car }: ICarDetailsProps): JSX.Element {
  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <Head>
        <title>
          {car.brand} {car.model}
        </title>
        <meta
          name="description"
          content={`Car details. Brand: ${car.brand} Model: ${car.model} Price: ${car.price}`}
        />
      </Head>
      <CarDetails car={car} />
    </>
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
