import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import globalize from "../assets/globalize.png";

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
    font-size: 15px;
`;

const A = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Globalize() {
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
                        <p>
                            <Span>This is a fullstack project.</Span> I created
                            a solution for an admin to handle their webshop. I
                            created a database using Mongo DB and created a
                            backend that handles calls to add, change and delete
                            products to the webshop using the database.
                        </p>
                        <p>
                            <Span>This thought me </Span>to ...................
                        </p>
                    </StyledFirstPContainer>
                    <ImgDiv>
                        <Img src={globalize} alt="" />
                    </ImgDiv>
                </Div>
                <A href="">Link to Glasskiosken</A>
            </Container>
        </>
    );
}

export default Globalize;
