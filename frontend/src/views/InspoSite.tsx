import MiniNavbar from "../components/MiniNavbar";

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
                    <h1>Inspirationssidan</h1>
                    <h2>NATIVE JAVASCRIPT</h2>
                    <h2> API / CHART.JS </h2>
                    <Img src={navbarinsposite} alt="navbar" />
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <p>
                                <Span>
                                    This project was the first time I tried out
                                    Javascript. Love at first sight?
                                </Span>{" "}
                                Yes. The misson was to use API. I used two
                                different API:s, one for getting colors and one
                                for getting images. We also needed to fetch from
                                a cities-api where and I created functions to
                                add, change and delete cities.
                            </p>
                            <p>
                                <Span>This thought me </Span>to
                            </p>
                        </StyledFirstPContainer>

                        <ImgDiv>
                            {/* <Img src={insposite} alt="" /> */}
                            <Img src={cities} alt="" />
                        </ImgDiv>
                    </Div>
                    <BigCarousel images={images} />
                    {/* <A href="">Link to Inspirationssidan</A>{" "} */}
                </Container>{" "}
            </FadingText>
        </>
    );
}

export default InspoSite;
