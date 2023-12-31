import styled from "styled-components";
import nextarrow from "../assets/nextarrow.png";
import prevarrow from "../assets/prevarrow.png";

import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 18px;

    // border: solid rgb(195, 170, 154) 1px;
    // padding-left: 25px;
    // padding-left: 15px;

    @media (min-width: 750px) {
        max-width: 80%;
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    // margin-left: -20px;
`;

const CarouselImage = styled.img`
    width: 200px;
    height: 300px;
    // height: auto;
    // margin: 1rem 0;
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;

    @media (min-width: 750px;) {
        width: 300px;
    }
`;

const ArrowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ImgOne = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: 80px;
    margin-top: 5px;

    box-shadow: 0px 0px 0x;
    box-shadow: none;
`;

const ImgTwo = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;

    margin-left: 80px;
    margin-top: 5px;

    box-shadow: none;
`;

const Caption = styled.p`
    font-size: 14px;
    text-align: center;
    // margin: 0.5rem 0;
    // margin-right: 10px;
    margin-top: 0;
    margin-bottom: 0;
    color: rgb(195, 170, 154);
    padding: 10px;
`;

interface CarouselProps {
    images: { url: string; caption: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Container>
            <CarouselContainer>
                <CarouselImage
                    src={images[currentIndex].url}
                    alt={`Slide ${currentIndex}`}
                />
                <ArrowContainer>
                    <ImgOne onClick={prevSlide} src={prevarrow} alt={"arrow"} />
                    <ImgTwo onClick={nextSlide} src={nextarrow} alt={"arrow"} />
                </ArrowContainer>
            </CarouselContainer>
            <Caption>{images[currentIndex].caption}</Caption>
        </Container>
    );
};

export default Carousel;
