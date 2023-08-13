import MiniNavbar from "../components/MiniNavbar";

import urbangreens from "../assets/urbangreens.png";
import navbarurban from "../assets/navbarurban.png";
import searchurban from "../assets/searchurban.png";
import search2urban from "../assets/search2urban.png";

import BigCarousel from "../components/BigCarousel";

import styled, { keyframes } from "styled-components";

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadingText = styled.div`
    animation: ${fadeInFromTop} 1s ease;
`;

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    margin-left: 20px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 300px;
        margin-right: 300px;
    }
`;

const Div = styled.div`
    display: flex;
`;

const H2 = styled.h2`
    text-align: center;
`;

const SecondPDiv = styled.div`
    display: flex;
`;

const Img = styled.img`
    max-width: 20vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        max-width: 30vh;
    }
`;

const StyledFirstPContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 600px;
    align-items: center;
    justify-content: center;
`;

const Span = styled.span`
    font-size: 14px;
`;

// const A = styled.a`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

function UrbanGreens() {
    const images = [
        {
            url: search2urban,
            caption: "The searchfield within the guide",
        },
        {
            url: searchurban,
            caption: "You can see how it filtres the plant-cards.",
        },
    ];
    return (
        <>
            <MiniNavbar />
            <FadingText>
                <HeadingDiv>
                    <h1>Urban Greens</h1>
                    <H2>JAVASCRIPT / VUE / VITE / NODE.JS</H2>
                    <H2> Scrum / Figma / Bootstrap / Responsive design</H2>

                    <Img src={urbangreens} alt="homepage Urban Greens" />
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <p>
                                <Span>This was a group project</Span> that we
                                first designed in Figma. We worked with the
                                agile method Scrum through out the whole
                                project. We created a fake backend by adding all
                                the information in a json file and fetching to
                                it.
                            </p>

                            <SecondPDiv>
                                <p>
                                    <Span>My main responsabilities was </Span>{" "}
                                    the navbar and the search component, from
                                    where the plants-cards gets filtred while
                                    you search.
                                </p>
                                <Img src={navbarurban} alt="navbar" />
                            </SecondPDiv>
                        </StyledFirstPContainer>
                    </Div>
                    <BigCarousel images={images} />
                </Container>{" "}
            </FadingText>
        </>
    );
}

export default UrbanGreens;
