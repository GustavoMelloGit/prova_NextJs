import {
  CarouselWrapper,
  Container,
  Content,
  ImageWrapper,
  Slide,
} from "./styles";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ICarProps } from "../../models/Car";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
//Utils
//Styles
//Components
interface IImageCarousel {
  data: ICarProps;
  setSelectedCar: Dispatch<SetStateAction<number>>;
  selectedCar: number;
}
export default function ImageCarousel(props: IImageCarousel) {
  const [windowSize, setWindowSize] = useState(33.3333);
  const { data, setSelectedCar, selectedCar } = props;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setWindowSize(33.3333);
      }
      if (window.innerWidth < 768) {
        setWindowSize(100);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handlePrevImage() {
    if (selectedCar > 0) {
      setSelectedCar((prev) => prev - 1);
    } else {
      setSelectedCar(data.colors.length - 1);
    }
  }
  function handleNextImage() {
    if (selectedCar < data.colors.length - 1) {
      setSelectedCar((prev) => prev + 1);
    } else {
      setSelectedCar(0);
    }
  }

  function handleCarClicked(id: number) {
    setSelectedCar(id);
  }

  const { colors } = data;
  const cars = colors.map((car) => (
    <Slide key={car.id} onClick={handleCarClicked.bind(null, car.id - 1)}>
      <Content
        className={selectedCar + 1 === car.id ? "selected" : "not_selected"}
      >
        <ImageWrapper>
          <Image
            className="img"
            src={car.image}
            alt={car.color}
            width={450}
            height={200}
          />
        </ImageWrapper>
      </Content>
    </Slide>
  ));

  return (
    <Container>
      <BsFillArrowLeftCircleFill className="arrow" onClick={handlePrevImage} />
      <CarouselWrapper>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={selectedCar}
          centerMode
          centerSlidePercentage={windowSize}
        >
          {cars}
        </Carousel>
      </CarouselWrapper>
      <BsFillArrowRightCircleFill className="arrow" onClick={handleNextImage} />
    </Container>
  );
}
