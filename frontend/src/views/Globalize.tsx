import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";

import Carousel from "../components/Carousel";

import MiniNavbar from "../components/MiniNavbar";

import globalize from "../assets/globalize.png";
import drawnsymbols from "../assets/drawnsymbols.png";
import adminnavbar from "../assets/adminnavbar.png";

import addproduct from "../assets/addproduct.png";
import addedproduct from "../assets/addedproduct.png";
import webshopproduct from "../assets/webshopproduct.png";
import cart from "../assets/cart.png";

// import GlobalizeCarousel from "../components/Carousel";

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

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const H1 = styled.h1`
    font-size: 24px;
`;

const WrapDiv = styled.div`
    display: flex;

    flex-wrap: wrap;
    max-width: 650px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const ImgDiv = styled.div`
    display: flex;
    width: auto;

    justify-content: end;

    // padding-right: 20px;
    // margin: 10px;
    margin-top: 30px;
    margin-bottom: 50px;

    @media (min-width: 750px) {
        display: flex;
    }
`;

// const Img = styled.img`
//     max-width: 20vh;
//     margin-left: 10px;
//     margin-top: 20px;

//     @media (min-width: 750px) {
//         max-width: 30vh;
//         margin-top: 0;
//     }
// `;

const StyledFirstPContainer = styled.div`
    display: flex;

    max-width: 600px;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledTextImgContiner = styled.div`
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 30vh;
    margin-top: 20px;
    margin-left: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 750px) {
        width: 40vh;
        margin-top: 10px;
        height: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const SecondImg = styled.img`
    width: 50%;
    height: 80px;
    margin-top: 10px;
    margin-right: 20px;

    // margin-left: 5px;

    @media (min-width: 750px) {
        margin-top: 10px;
        height: 50%;
    }
`;

const ThirdImg = styled.img`
    width: 50%;
    margin-top: 10px;
    height: 80px;

    // margin-left: 5px;
    margin-left: 20px;

    @media (min-width: 750px) {
        margin-top: 10px;
        height: 50%;
        width: 63.5%;
    }
`;

const P = styled.p`
    width: auto;

    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    font-size: 14px;
    // margin-bottom: 20px;

    @media (min-width: 750px) {
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 16px;
        margin-top: 40px;
    }
`;

const Container = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

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
    flex-direction: column;
    align-items: center;
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

    // const A = styled.a
`;

function Globalize() {
    const images = [
        {
            url: addproduct,
            caption:
                "Firstly, the logged in admin can add a product to the webshop",
        },
        { url: addedproduct, caption: "The admin view of the added product" },
        {
            url: webshopproduct,
            caption: "The new product from the costumer view in the webshop",
        },
        {
            url: cart,
            caption: "The custumers cart ",
        },
    ];
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <H1>Globalize</H1>
                <WrapDiv>
                    <h2>REACT / TYPESCRIPT / MongoDB / NoSQL</h2>
                    <h2>
                        {" "}
                        Singel Page Application / Formik / Axios /
                        Styled-Components / CORS-prevention{" "}
                    </h2>
                </WrapDiv>
            </HeadingDiv>
            <Container>
                <FadingText>
                    <Div>
                        <Img src={globalize} alt="website" />
                        <StyledFirstPContainer>
                            <StyledTextImgContiner>
                                <P>
                                    <Span>This is a fullstack project.</Span>{" "}
                                    The customer is a foodtruck & a resturant
                                    that also sells merge, does catering and
                                    having events. Beside presenting the menu
                                    and having a booking request component for
                                    the catering, I created a solution for an
                                    admin to handle their webshop.
                                </P>

                                <P>
                                    <Span>
                                        I created a database using MongoDB{" "}
                                    </Span>
                                    and created a backend that handels adding,
                                    changing and deleting products to the
                                    webshop using the database.
                                </P>
                            </StyledTextImgContiner>
                        </StyledFirstPContainer>
                        <Carousel images={images} />
                    </Div>

                    <P>
                        <Span>I made the background and the logos </Span>
                        (such as the hamburgermenu symbol (pun intended), for
                        the cart etc). The customer asked for a orange and blue
                        design, and I choose to add a light pink background to
                        capture the feeling of the physical resturant.
                    </P>

                    <ImgDiv>
                        <SecondImg src={drawnsymbols} alt=" logos" />
                        <ThirdImg src={adminnavbar} alt="admin navbar" />
                    </ImgDiv>

                    {/* <P>
                        At the moment, the backend is not connected to the
                        server (due to swapping from mongodb to fit the
                        render-server better), so the webshop and the login is
                        currently not working, but you can see the essence of
                        the site in the link below. And you can see the missing
                        components in the carousel above.
                    </P>

                    <A href="https://globalize.onrender.com/">
                        Go to Globalize
                    </A> */}
                </FadingText>
            </Container>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default Globalize;
