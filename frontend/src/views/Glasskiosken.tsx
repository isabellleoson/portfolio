import MiniNavbar from "../components/MiniNavbar";

import glasskiosk from "../assets/glasskiosken.png";

import icecreams from "../assets/icecreams.png";
import bookingform from "../assets/form.png";

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

const ImgDiv = styled.div`
    width: auto;
    // padding-left: 30px;
    margin: 10px;
`;

const Img = styled.img`
    max-width: 20vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        min-width: 30vh;
    }
`;

const HeadImg = styled.img`
    max-width: 20vh;
    // padding-left: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 750px) {
        min-width: 30vh;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 150px;
        margin-right: 150px;
    }
`;

const Div = styled.div`
    display: flex;
`;

const StyledFirstPContainer = styled.div`
    display: flex;
    flex-direction: column;
    // max-width: 600px;
    align-items: center;
    justify-content: center;

    // @media (min-width: 750px) {
    //     max-width: 100%;
    //     padding-left: 150px;
    //     padding-right: 150px;
    // }
`;

const SecondContainer = styled.div`
    display: flex;
`;

const PContainer = styled.div`
    text-align: end;
`;

const SecondP = styled.p`
    // text-align: end;
`;

const ThirdP = styled.p``;

const Span = styled.span`
    font-size: 15px;
`;

// const A = styled.a`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 30px;
// `;

function Glasskiosken() {
    // const images = [
    //     {
    //         url: icecreams,
    //         caption:
    //             "Firstly, the logged in admin can add a product to the webshop",
    //     },
    //     { url: bookingform, caption: "The admin view of the added product" },
    // ];

    return (
        <>
            <MiniNavbar />
            <FadingText>
                <HeadingDiv>
                    <h1>Glasskiosken</h1>
                    <h2>HTML / CSS</h2>
                    <h2>Grid layout / Responsive design</h2>
                </HeadingDiv>
                <Container>
                    <HeadImg src={glasskiosk} alt="" />
                    <Div>
                        <StyledFirstPContainer>
                            <p>
                                <Span>This was my very first time coding.</Span>{" "}
                                The project is build with only HTML and CSS. I
                                wanted to create a fun, colorful site that makes
                                you happy. The website is build "mobile first",
                                and accordning to Google's SEO recommendations
                                and accessibility recommendations, with a focus
                                on making semantic code.{" "}
                            </p>

                            {/* 
                        <Carousel images={images} /> */}

                            <SecondContainer>
                                <ImgDiv>
                                    <Img src={icecreams} alt="icecreams" />
                                    <Img src={bookingform} alt="booking form" />
                                </ImgDiv>
                                <PContainer>
                                    <SecondP>
                                        <Span>This thought me </Span>to write
                                        clear code. I used prettier for making
                                        the code look good. This also thought me
                                        that grid is fine, but I never used it
                                        since. I heart Flexbox.
                                    </SecondP>

                                    <ThirdP>
                                        Overall, this was my first tumbeling
                                        steps towards becoming a developer. When
                                        I look back at this, I realize how far
                                        I´ve come.
                                    </ThirdP>
                                </PContainer>
                            </SecondContainer>
                        </StyledFirstPContainer>
                    </Div>

                    {/* <A href="">Link to Glasskiosken</A> */}
                </Container>{" "}
            </FadingText>
        </>
    );
}

export default Glasskiosken;
