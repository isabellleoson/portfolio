import styled, { keyframes } from "styled-components";

import MiniNavbar from "../components/MiniNavbar";
import Carousel from "../components/Carousel";

import closebuyimg from "../assets/closebuy.png";
import firstmodal from "../assets/firstmodal.png";
import bigmodal from "../assets/bigmodal.png";

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
    max-width: 200px;
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

    // @media (min-width: 750px) {
    //     max-width: 100%;
    //     padding-left: 150px;
    //     padding-right: 150px;
    // }
`;

const Span = styled.span`
    font-size: 14px;
`;

const A = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function CloseBuy() {
    const images = [
        {
            url: closebuyimg,
            caption: "Homepage, mobile version.",
        },
        {
            url: firstmodal,
            caption: "First modal.",
        },
        {
            url: bigmodal,
            caption: "The bigger modal with more information.",
        },
    ];
    return (
        <>
            <MiniNavbar />

            <FadingText>
                <HeadingDiv>
                    <h1>FakeStore</h1>
                    <h2>HTML / CSS</h2>
                    <h2>Grid layout / Responsive design</h2>

                    <ImgDiv>
                        <Img src={closebuyimg} alt="" />
                    </ImgDiv>
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <p>
                                <Span>This project was a group project</Span>{" "}
                                that I, togheter with two developers from my
                                class created after the design from students in
                                the UX-class. The idea was an app where you can
                                find second hand products in your nearby area.
                            </p>

                            <p>
                                <Span>I created </Span>the backend and the
                                database for the project. I also created the
                                modals that presented the products. I used
                                useContext to get the right product to the right
                                pin.
                            </p>

                            <Carousel images={images} />
                        </StyledFirstPContainer>
                    </Div>

                    <A href="https://fullstack-9mbp.onrender.com/">
                        Link CloseBuy
                    </A>
                </Container>{" "}
            </FadingText>
        </>
    );
}

export default CloseBuy;
