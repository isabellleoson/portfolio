import styled, { keyframes } from "styled-components";
import me from "../assets/me.jpg";
import NavBar from "../components/NavBar";

const HomePageContainer = styled.div`
    background-image: url(${me});
    background-size: cover;
    background-position: center;
    height: 900px;
    margin: -40px;
`;

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

const H1 = styled.h1`
    color: #342f2a;
    margin-bottom: -20px;
`;

const H2 = styled.h1`
    color: #342f2a;
`;

const P = styled.p`
    display: flex;
    font-size: 14px;
    text-align: center;
    margin-top: 40px;
    margin-left: 230px;
    width: 35%;
    color: #342f2a;
    background-color: rgba(240, 232, 227, 0.5);
`;

const Button = styled.button`
    background-color: #342f2a;
    color: rgba(240, 232, 227, 1);
    padding-top: 0;
    font-size: 13px;
    width: 100px;
    height: 50px;
    border-radius: 40px 40px 999em 999em;
`;

function Home() {
    return (
        <>
            <HomePageContainer>
                <Header>
                    {" "}
                    <FadingText>
                        <H1>Portfolio.</H1>
                        <H2>Isabell Leoson.</H2>
                    </FadingText>
                    <FadingText>
                        <NavBar />
                    </FadingText>
                    <FadingText>
                        <P>
                            I am a frontend developer student who is passionate
                            about creative solutions, stylish design, and
                            user-friendly functionality.
                        </P>
                    </FadingText>
                    <FadingText>
                        <Button>Let's talk!</Button>
                    </FadingText>
                </Header>

                {/* <Main></Main> */}
            </HomePageContainer>
        </>
    );
}

export default Home;
