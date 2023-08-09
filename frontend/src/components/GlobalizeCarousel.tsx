import styled from "styled-components";
import nextarrow from "../assets/nextarrow.png";
import prevarrow from "../assets/prevarrow.png";

import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: solid rgb(195, 170, 154) 1px;
    padding-left: 25px;
    padding-right: 25px;
`;

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // margin-left: -20px;
`;

const CarouselImage = styled.img`
    max-width: 80%;
    height: auto;
    margin: 1rem 0;
`;

const Img = styled.img`
    width: 100%;
    cursor: pointer;
    // margin: 5px;

    &:hover {
        width: 105%;
    }
`;

// const CarouselButton = styled.button`
//     background-color: #333;
//     color: white;
//     border: none;
//     padding: 5px;
//     margin: 0.5rem;
//     cursor: pointer;
//     font-size: 10px;
// `;

const Caption = styled.p`
    font-size: 14px;
    text-align: center;
    // margin: 0.5rem 0;
    // margin-right: 10px;
    margin-top: 0;
    color: rgb(195, 170, 154);
    padding: 10px;
`;

interface GlobalizeCarouselProps {
    images: { url: string; caption: string }[];
}

const GlobalizeCarousel: React.FC<GlobalizeCarouselProps> = ({ images }) => {
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
                <Img onClick={prevSlide} src={prevarrow} alt={"arrow"} />
                <CarouselImage
                    src={images[currentIndex].url}
                    alt={`Slide ${currentIndex}`}
                />
                <Img onClick={nextSlide} src={nextarrow} alt={"arrow"} />
            </CarouselContainer>
            <Caption>{images[currentIndex].caption}</Caption>
        </Container>
    );
};

export default GlobalizeCarousel;
