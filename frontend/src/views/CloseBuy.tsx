import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";

import Carousel from "../components/Carousel";

import closebuyimg from "../assets/closebuy.png";
import firstmodal from "../assets/firstmodal.png";
import bigmodal from "../assets/bigmodal.png";

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
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 24px;
`;

const ImgDiv = styled.div`
    width: auto;
    // padding-left: 30px;
    margin: 10px;
`;

const Img = styled.img`
    width: 200px;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        width: 40vh;
    }
`;

const Container = styled.div`
    margin-left: 30px;
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

const P = styled.div`
    font-size: 12px;
    letter-spacing: 1px;

    @media (min-width: 750px) {
        text-align: center;
        font-size: 16px;
        margin-bottom: 20px;
    }
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
        margin-top: 60px;
        margin-bottom: 40px;
    }

    // const A = styled.a
`;

// const A = styled.a`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

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
                    <H1>CloseBuy</H1>
                    <h2>
                        TYPESCRIPT / REACT / NODE.js / ElephantSQL / EXPRESS
                    </h2>
                    <h2>
                        pgAdmin 4 / Styled components / Responsive design /
                        Axios
                    </h2>

                    <ImgDiv>
                        <Img src={closebuyimg} alt="" />
                    </ImgDiv>
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <P>
                                <Span>This project was a group project</Span>{" "}
                                that I, togheter with two developers from my
                                class created after the design from students in
                                the UX-class. The idea was an app where you can
                                find second hand products in your nearby area.
                            </P>

                            <P>
                                <Span>I created </Span>the backend and the
                                database for the project. I also created the
                                modals that presented the products. I used
                                useContext hook so that the values from the
                                backend are availeble over the whole
                                application.
                            </P>

                            <Carousel images={images} />
                        </StyledFirstPContainer>
                    </Div>

                    {/* <A href="https://fullstack-9mbp.onrender.com/">
                        Link CloseBuy
                    </A> */}
                </Container>{" "}
            </FadingText>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default CloseBuy;
