import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import urbangreens from "../assets/urbangreens.png";

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const H2 = styled.h2`
    text-align: center;
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

function UrbanGreens() {
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>Urban Greens</h1>
                <H2>JAVASCRIPT / VUE / VITE / NODE.JS</H2>
                <H2> Agile / Figma / Bootstrap / Responsive design</H2>
            </HeadingDiv>
            <Container>
                <Div>
                    <StyledFirstPContainer>
                        <p>
                            <Span>This was a group project</Span> that was first
                            designed in Figma. We worked with agile.... We
                            created a fake backend by adding all the information
                            in a json file and fetching to it. We used Vuex
                            ......
                        </p>
                        <p>
                            <Span>This thought me </Span>to code with other
                            people. I learned a lot both watching other code,
                            and by explaining my own code.
                        </p>
                    </StyledFirstPContainer>

                    <ImgDiv>
                        <Img src={urbangreens} alt="" />
                    </ImgDiv>
                </Div>
                <A href="">Link to Urban Greens</A>{" "}
            </Container>{" "}
        </>
    );
}

export default UrbanGreens;
