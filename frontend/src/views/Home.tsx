import styled, { keyframes } from "styled-components";
// import me from "../assets/me.jpg";
// import jag from "../assets/jag.jpg";
import io from "../assets/io.jpg";
import NavBar from "../components/NavBar";
import HomeFooter from "../components/HomeFooter";

import Contact from "../components/Contact";

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
    height: 105vh;

    margin: -38px;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        background-size: cover;

        width: 94vw;
        margin: 0px;
        // padding: 10px;
        padding-left: 76px;
        height: 100vh;
        // justify-content: center;
    }
`;

// const Header = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     // padding-top: 40px;
//     padding-right: 40px;
//     color: #342f2a;
//     background-color: rgba(240, 232, 227, 0.5);
//     height: 100%;
// `;

const HeaderContainer = styled.div`
    padding-top: 20px;
    align-items: flex-end;
    justify-content: end;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        padding-right: 0px;
        padding-top: 0px;
    }
`;

const H1 = styled.h1`
    font-size: 30px;
    color: #342f2a;
    margin-bottom: -20px;
    border: none;
    width: 100%;

    justify-content: end;
    display: flex;

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

const SmilyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    // padding-right: 30px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        // background-color: rgb(235, 230, 162);
        background-color: rgba(255, 255, 133, 0.7);
        box-shadow: 0px 0px 10px rgba(52, 44, 42, 0.5);

        max-width: 27%;
        height: 300px;
        justify-content: center;
        align-items: center;
        padding: 30px;
        border-radius: 50%;
        margin-left: 40px;
        margin-right: 50px;
    }
`;

const SmallSmiley = styled.div`
    @media (max-width: 750px) {
        background-color: rgba(255, 255, 133, 0.7);
        box-shadow: 0px 0px 10px rgba(52, 44, 42, 0.5);

        max-width: 30%;
        height: auto;
        justify-content: center;
        align-items: center;
        padding-top: 60px;
        padding-bottom: 10px;
        // padding-bottom: -20px;
        padding-left: 10px;
        padding-right: 10px;

        border-radius: 50%;
        // margin-left: 40px;
        margin-right: 10px;
        margin-top: 10px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-right: 30px;

    @media (max-width: 750px) {
        padding-right: 30px;
    }

    @media (min-width: 750px) {
        align-items: flex-end;
        // padding-left: 50px;

        // padding-right: 50px;

        // border-right: solid black 2px;
    }
`;

const P = styled.p`
    display: flex;
    font-size: 14px;
    text-align: end;
    margin-top: 40px;
    width: 35%;
    color: #342f2a;
    // background-color: rgba(240, 232, 227, 0.5);
    margin-top: 0;

    @media (min-width: 750px) {
        margin-top: 10px;
        width: 85%;
        text-align: center;
        justify-content: center;
        align-items: center;

        // font-weight: bold;
        // margin-left: 50px;
    }
`;

// const Button = styled.button`
//     background-color: #342f2a;
//     color: rgba(240, 232, 227, 1);
//     padding-top: 0;
//     font-size: 13px;
//     width: 100px;
//     height: 50px;
//     border-radius: 40px 40px 999em 999em;

//     @media (min-width: 750px) {
//         // margin-right: 10px;
//         margin-top: 10px;
//         // margin: 0;
//         width: 200px;
//         height: 100px;
//         font-size: 20px;
//     }
// `;

// const TextContainer = styled.div`
//     @media (min-width: 750px) {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-end;
//         justify-content: center;
//     }
// `;

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
                            <SmilyContainer>
                                <NavBar />

                                <P>
                                    I am a frontend developer student who is
                                    passionate about creative solutions, stylish
                                    design, and user-friendly functionality.
                                </P>

                                {/* <Button>Let's talk!</Button> */}
                                <SmallSmiley>
                                    <Contact />
                                </SmallSmiley>
                            </SmilyContainer>
                        </Container>
                    </div>
                </FadingText>
            </HomePageContainer>

            <HomeFooter />
        </>
    );
}

export default Home;
