import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import glasskiosk from "../assets/glasskiosken.png";

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

function FakeStore() {
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>FakeStore</h1>
                <h2>HTML / CSS</h2>
                <h2>Grid layout / Responsive design</h2>
            </HeadingDiv>
            <Container>
                <Div>
                    <StyledFirstPContainer>
                        <p>
                            <Span>This project..</Span>
                        </p>
                        <p>
                            <Span>This thought me </Span>to
                        </p>
                    </StyledFirstPContainer>

                    <ImgDiv>
                        <Img src={glasskiosk} alt="" />
                    </ImgDiv>
                </Div>

                <A href="">Link to Fake store</A>
            </Container>{" "}
        </>
    );
}

export default FakeStore;
