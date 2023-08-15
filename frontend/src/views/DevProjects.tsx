import { Link } from "react-router-dom";

import DevNavbar from "../components/DevNavbar";
import background from "../assets/devbackground.png";

import Footer from "../components/Footer";

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

const Li = styled.div`
    display: flex;
    justify-content: end;
    font-size: 10px;

    @media (min-width: 750px) {
        padding: 20px;
    }
`;
const H1 = styled.h1`
    margin-bottom: 0;

    @media (min-width: 750px) {
        margin-top: 0;
        font-size: 25px;
    }
`;
const P = styled.p`
    display: flex;
    flex-direction: column;
    text-align: end;
    // margin-left: 70px;
    margin-bottom: 40px;

    @media (min-width: 750px) {
        font-size: 14px;
        max-width: 320px;
    }
`;

const BackgroundContainer = styled.div`
    @media (min-width: 750px) {
        background-image: url(${background});
        background-size: cover;
        background-position: center;
    }
`;

const Container = styled.div`
    @media (min-width: 750px) {
        display: flex;
        // flex-direction: column;

        flex-direction: row-reverse;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;

    @media (min-width: 750px) {
        padding: 20px;
    }
`;

const NavbarDiv = styled.div`
    // margin-right: 90px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: flex-end;
    // justify-content: end;

    @media (min-width: 750px) {
        // padding-right: 20px;
    }
    // padding-top: 40px;
    // padding-right: 40px;
`;

const FooterContainer = styled.div`
    margin-top: 100px;
`;

function DevProjects() {
    return (
        <>
            <BackgroundContainer>
                <Li>
                    <Link className="link" to="/">
                        Home.
                    </Link>
                </Li>

                <FadingText>
                    <Container>
                        <Header>
                            <Div>
                                <H1>Frontend Development.</H1>
                                <P>
                                    These are the projects I've created during
                                    my first year as a student at IT-Högskolan
                                    in Gothenburg.
                                </P>
                            </Div>
                        </Header>
                        <NavbarDiv>
                            <DevNavbar />
                        </NavbarDiv>
                    </Container>
                </FadingText>
            </BackgroundContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}

export default DevProjects;
