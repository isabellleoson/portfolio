import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import insposite from "../assets/insposite.png";
import cities from "../assets/cities.png";

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
`;

const StyledFirstPContainer = styled.div`
    display: flex;
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

function FakeStore() {
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>FakeStore</h1>
                <h2>NATIVE JAVASCRIPT</h2>
                <h2> API / </h2>
            </HeadingDiv>
            <StyledFirstPContainer>
                <p>
                    <Span>This project........</Span>{" "}
                </p>
                <ImgDiv>
                    <Img src={insposite} alt="" />
                    <Img src={cities} alt="" />
                </ImgDiv>
            </StyledFirstPContainer>
            <p>
                <Span>This thought me </Span>to
            </p>
            <A href="">Link to FakeStore</A>{" "}
        </>
    );
}

export default FakeStore;
