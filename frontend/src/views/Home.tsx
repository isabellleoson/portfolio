import styled from "styled-components";
import me from "../assets/me.jpg";
import NavBar from "../components/NavBar";

const HomePageContainer = styled.div`
    background-image: url(${me});
    background-size: cover;
    background-position: center;
    height: 900px;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 40px;
    padding-right: 40px;
`;

const Main = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: flex-end;
    // padding: 40px;
    // margin-left: 680px;
    // text-align: right;
`;

const P = styled.p`
    display: flex;
    font-size: 14px;
    text-align: justify;
    width: 40%;
`;

function Home() {
    return (
        <>
            <HomePageContainer>
                <Header>
                    <h1>Portfolio.</h1>
                    <h2>Isabell Leoson.</h2>

                    <NavBar />

                    <P>
                        I am a frontendutveckla-student who is passionate about
                        creative solutions, stylish design, and user-friendly
                        functionality.
                    </P>
                </Header>

                <Main></Main>
            </HomePageContainer>
        </>
    );
}

export default Home;