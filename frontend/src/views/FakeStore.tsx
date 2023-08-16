import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";

import Carousel from "../components/Carousel";

import homestore from "../assets/homestore.png";
import loginstore from "../assets/loginstore.png";
import cardstore from "../assets/cardstore.png";
import cartstore from "../assets/cartstore.png";

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
    margin-left: 10px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 24px;
`;

const ImgDiv = styled.div`
    width: auto;
    margin-top: 10px;
    // padding-left: 30px;
    // margin: 10px;
`;

const Img = styled.img`
    max-width: 200px;
    // padding-left: 30px;
    // margin: 10px;

    @media (min-width: 750px) {
        min-width: 40vh;
    }
`;

const Container = styled.div`
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

const P = styled.p`
    font-size: 14px;
    text-align: center;

    @media (min-width: 750px) {
        font-size: 16px;
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
        margin-top: 40px;
        margin-bottom: 40px;
    }

    // const A = styled.a
`;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

function FakeStore() {
    const images = [
        {
            url: loginstore,
            caption: "A very simple login page to the shop",
        },
        {
            url: homestore,
            caption:
                "I used Vue router and a query parameter for the  'welcome'-message and the username",
        },
        {
            url: cardstore,
            caption:
                "I used an API to present the products and I stored the added products with Vuex.",
        },
        {
            url: cartstore,
            caption: "The custumers cart ",
        },
    ];
    return (
        <>
            <MiniNavbar />

            <FadingText>
                <HeadingDiv>
                    <H1>FakeStore</H1>
                    <h2>JAVASCRIPT / VUE / VITE / NODE.JS</h2>
                    <h2>SASS / Bootstrap / Responsive design </h2>

                    <ImgDiv>
                        <Img src={homestore} alt="" />
                    </ImgDiv>
                </HeadingDiv>
                <Container>
                    <Div>
                        <StyledFirstPContainer>
                            <P>
                                <Span>This is a webshop</Span> where you can add
                                products to a cart. This was a short project
                                where the focus was at the functions rather than
                                the design.
                            </P>
                            <P>
                                <Span>It is a dynamic Vite-application</Span>,
                                using <Span>Vue.</Span> And the first time I
                                used JavaScript with a framework.
                            </P>

                            <Carousel images={images} />
                        </StyledFirstPContainer>
                    </Div>
                    {/* 
                <A href="">Link to Fake store</A> */}
                </Container>{" "}
            </FadingText>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default FakeStore;
