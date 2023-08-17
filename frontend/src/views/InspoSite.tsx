import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";

// import insposite from "../assets/insposite.png";
import cities from "../assets/cities.png";
import navbarinsposite from "../assets/navbarinsposite.png";
import styled, { keyframes } from "styled-components";

import imgsearch from "../assets/imgsearch.png";
import imagesinfo from "../assets/imagesinfo.png";
import shufflesearch from "../assets/shufflesearch.png";
import colorsearch from "../assets/colorsearch.png";
import chartjs from "../assets/chartjs.png";
import imgcolorcode from "../assets/imgcolorcode.png";
import colorcode from "../assets/colorcode.png";

import BigCarousel from "../components/BigCarousel";

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

const Img = styled.img`
    width: 35vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        width: 50vh;
    }
`;

const P = styled.p`
    margin-right: 10px;

    @media (min-width: 750px) {
        font-size: 16px;
        text-align: center;
    }
`;
const Container = styled.div`
    // margin-left: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 50px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 300px;
        margin-right: 300px;
        // margin-bottom: 40px;
    }
`;

const Div = styled.div`
    display: flex;
`;

const StyledFirstPContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 600px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Span = styled.span`
    font-size: 14px;
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

function InspoSite() {
    const images = [
        {
            url: imgsearch,
            caption:
                "You can search for photos, and choose the amount you want to see",
        },
        {
            url: imagesinfo,
            caption: "You can view (and hide) information about each photo",
            width: "400px",
        },
        {
            url: shufflesearch,
            caption:
                "Here, you can shuffle random colors, and choose in witch kind of color code you want them in. I used localStorage so you also can choose to see previous searches.",
        },
        {
            url: colorcode,
            caption: "If you choose all, it would look something like this. ",
        },
        {
            url: colorsearch,
            caption:
                "You can also search for different shades of a color, and choose to see images in the choosen color.",
        },
        {
            url: chartjs,
            caption:
                "I used chartJS to present the amount of red, blue and green in the shades.",
        },
        {
            url: imgcolorcode,
            caption:
                "And here are the images in the color, and the main hex color in the photo.",
        },
    ];
    return (
        <>
            <MiniNavbar />

            <FadingText>
                <HeadingDiv>
                    <H1>Inspirationssidan</H1>
                    <h2>NATIVE JAVASCRIPT</h2>
                    <h2> API / CHART.JS </h2>
                    <Img src={navbarinsposite} alt="navbar" />
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <P>
                                <Span>
                                    This is a site for finding insiration.
                                </Span>{" "}
                                Here you can find different colors, shades &
                                images that will make it easier to find a little
                                creativity.
                            </P>
                            <P>
                                <Span>
                                    This project was the first time I tried out
                                    Javascript.{" "}
                                </Span>
                                Love at first sight?
                                <Span> Yes</Span>. The misson was to use API. I
                                used two different API:s, one for getting colors
                                and one for getting images. We also needed to
                                fetch from a cities-api where and I created
                                functions to add, change and delete cities.
                            </P>
                            <Img src={cities} alt="" />
                            <P>
                                <Span>
                                    Below you can see more of the site and the
                                    different functions.
                                </Span>
                            </P>
                        </StyledFirstPContainer>
                    </Div>
                    <BigCarousel images={images} />
                </Container>{" "}
            </FadingText>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default InspoSite;
