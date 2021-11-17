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
import { useState } from "react";

interface IImageCarousel {
  data: ICarProps;
}
export default function ImageCarousel({ data }: IImageCarousel) {
  const [selectedImage, setSelectedImage] = useState(0);

  function handlePrevImage() {
    if (selectedImage > 0) {
      setSelectedImage((prev) => prev - 1);
    } else {
      setSelectedImage(data.colors.length - 1);
    }
  }
  function handleNextImage() {
    if (selectedImage < data.colors.length - 1) {
      setSelectedImage((prev) => prev + 1);
    } else {
      setSelectedImage(0);
    }
  }

  function handleCarClicked(id: number) {
    setSelectedImage(id);
  }

  const { colors } = data;
  const cars = colors.map((car) => (
    <Slide key={car.id} onClick={handleCarClicked.bind(null, car.id - 1)}>
      <Content
        className={selectedImage + 1 === car.id ? "selected" : "not_selected"}
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
          selectedItem={selectedImage}
          centerMode
          centerSlidePercentage={33.333}
        >
          {cars}
        </Carousel>
      </CarouselWrapper>
      <BsFillArrowRightCircleFill className="arrow" onClick={handleNextImage} />
    </Container>
  );
}
