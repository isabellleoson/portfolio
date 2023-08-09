import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import globalize from "../assets/globalize.png";

import addproduct from "../assets/addproduct.png";
import addedproduct from "../assets/addedproduct.png";
import webshopproduct from "../assets/webshopproduct.png";

import GlobalizeCarousel from "../components/GlobalizeCarousel";

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
    width: auto;
    // padding-left: 30px;
    margin: 10px;
`;

const Img = styled.img`
    max-width: 20vh;
    // padding-left: 30px;
    margin: 10px;

    @media (min-width: 750px) {
        max-width: 30vh;
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

const P = styled.p`
    width: 100%;
    margin-bottom: 20px;
`;

const A = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Globalize() {
    const images = [
        {
            url: addproduct,
            caption:
                "Here, the logged in admin can add a product to the webshop",
        },
        { url: addedproduct, caption: "The admin view of the added product" },
        {
            url: webshopproduct,
            caption: "The new product from the users view in the webshop",
        },
    ];
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>Globalize</h1>
                <WrapDiv>
                    <h2>REACT / TYPESCRIPT / MongoDB / BACKEND</h2>
                    <h2>
                        {" "}
                        Singel Page Application / React hooks (useEffect,
                        useContext) / Formik / Styled-Components /
                        CORS-prevention{" "}
                    </h2>
                </WrapDiv>
            </HeadingDiv>
            <Container>
                <Div>
                    <StyledFirstPContainer>
                        <P>
                            <Span>This is a fullstack project.</Span> I created
                            a solution for an admin to handle their webshop. I
                            created a database using MongoDB and created a
                            backend that handels adding, changing and deleting
                            products to the webshop using the database.
                        </P>
                    </StyledFirstPContainer>
                    <ImgDiv>
                        <Img src={globalize} alt="" />
                    </ImgDiv>
                </Div>
                <P>
                    <Span>I made the background and the logos </Span>
                    (such as the hamburgermenu (pun intended), symbol for the
                    cart etc). The customer asked for a orange and blue design,
                    and I choose to add a light pink background to capture the
                    feeling of the physical resturant.
                </P>
                <GlobalizeCarousel images={images} />

                <p>
                    At the moment, the backend is not connected to the server
                    (due to swapping from mongodb to fit the render-server
                    better), so the webshop and the login is currently not
                    working, but you can see the essence of the site at;
                </p>
                <A href="https://globalize.onrender.com/">Globalize</A>
            </Container>
        </>
    );
}

export default Globalize;
