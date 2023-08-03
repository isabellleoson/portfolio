import styled, { keyframes } from "styled-components";
import me from "../assets/me.jpg";
import jag from "../assets/jag.jpg";
import io from "../assets/io.jpg";
import NavBar from "../components/NavBar";

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

const HomePageContainer = styled.div`
    background-image: url(${io});
    background-size: cover;
    background-position: center;
    // justify-content: end;
    // align-items: flex-end;
    height: 100vh;

    margin: -40px;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        width: 136.7%;
        margin: 0px;
        height: 100vh;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-top: 40px;
    padding-right: 40px;
    color: #342f2a;
    background-color: rgba(240, 232, 227, 0.5);
    height: 100%;
`;

const HeaderContainer = styled.div`
    // display: flex;
    // flex-direction: column;
`;

const H1 = styled.h1`
    font-size: 30px;
    color: #342f2a;
    margin-bottom: -20px;
    border: none;
    width: 100%;

    @media (min-width: 750px) {
        font-size: 70px;
    }
`;

const H2 = styled.h1`
    color: #342f2a;
    border: none;
    width: 100%;

    @media (min-width: 750px) {
        font-size: 25px;
        margin-top: 0;
        margin-right: 4px;

        justify-content: end;
        display: flex;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 750px) {
        align-items: flex-end;
        padding-right: 50px;

        // padding-right: 50px;

        // border-right: solid black 2px;
    }
`;

const P = styled.p`
    display: flex;
    font-size: 14px;
    text-align: end;
    margin-top: 40px;
    // margin-left: 240px;
    width: 35%;
    color: #342f2a;
    background-color: rgba(240, 232, 227, 0.5);

    @media (min-width: 750px) {
        margin-top: 10px;
        // margin-right: 50px;
    }
`;

const Button = styled.button`
    background-color: #342f2a;
    color: rgba(240, 232, 227, 1);
    padding-top: 0;
    font-size: 13px;
    width: 100px;
    height: 50px;
    border-radius: 40px 40px 999em 999em;
    margin-right: 15px;

    @media (min-width: 750px) {
        margin-right: 95px;
    }
`;

const TextContainer = styled.div`
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }
`;

function Home() {
    return (
        <>
            <HomePageContainer>
                <FadingText>
                    <div>
                        <Container>
                            <HeaderContainer>
                                <H1>Portfolio.</H1>
                                <H2>Isabell Leoson.</H2>
                            </HeaderContainer>

                            <NavBar />

                            <P>
                                I am a frontend developer student who is
                                passionate about creative solutions, stylish
                                design, and user-friendly functionality.
                            </P>

                            <Button>Let's talk!</Button>
                        </Container>
                    </div>
                </FadingText>
            </HomePageContainer>
        </>
    );
}

export default Home;
