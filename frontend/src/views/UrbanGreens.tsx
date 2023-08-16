import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";

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
const H1 = styled.h1`
    font-size: 24px;
`;

const Container = styled.div`
    // margin-left: 20px;
    margin-left: 20px;
    margin-bottom: 50px;

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

    @media (min-width: 750px) {
        width: 400px;
        align-items: center;
    }
`;

const Img = styled.img`
    max-width: 30vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        min-width: 40vh;
        display: flex;
    }
`;

const Img2 = styled.img`
    max-width: 20vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        min-width: 40vh;
        display: flex;
        margin: 30px;
    }
`;

const StyledFirstPContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 600px;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    @media (min-width: 750px) {
        font-size: 16px;
    }
`;

const Span = styled.span`
    font-size: 15px;
    color: rgb(195, 170, 154);

    @media (min-width: 750px) {
        font-size: 18px;
    }
`;
const FooterContainer = styled.div`
    @media (min-width: 750px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
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
                    <H1>Urban Greens</H1>
                    <H2>JAVASCRIPT / VUE / VITE / NODE.JS</H2>
                    <H2> Scrum / Figma / Bootstrap / Responsive design</H2>

                    <Img src={urbangreens} alt="homepage Urban Greens" />
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <P>
                                <Span>This was a group project</Span> that we
                                first designed in Figma. We worked with the
                                agile method Scrum through out the whole
                                project. We created a fake backend by adding all
                                the information in a json file and fetching to
                                it.
                            </P>

                            <SecondPDiv>
                                <P>
                                    <Span>Urbans Greens is a plant-app </Span>{" "}
                                    where you can search for plants, both by
                                    name or category if you for example are
                                    looking for herbs or only green plants. You
                                    can add plants to "your windowsill"
                                    (favorits). But also to get tips on how to
                                    take care of them.
                                </P>
                                <Img2 src={navbarurban} alt="navbar" />
                            </SecondPDiv>
                        </StyledFirstPContainer>
                    </Div>
                    <P>
                        <Span>My main responsabilities was </Span> the navbar
                        and the search component, from where the plants-cards
                        gets filtred while you search.
                    </P>
                    <BigCarousel images={images} />
                </Container>{" "}
            </FadingText>

            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default UrbanGreens;
