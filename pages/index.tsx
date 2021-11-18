import Head from "next/head";
import type { NextPage } from "next";
import { CarsGrid } from "@components/index";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exotic cars</title>
        <meta
          name="description"
          content="Exotic Cars, where you can find your best cars for rent"
        />
      </Head>
      <CarsGrid />
    </>
  );
};

export default Home;

//Diminuir o padding do layout em mobile
//Adicionar pasta mocks para guardar DUMMY_DATA e o arquivo api.json
