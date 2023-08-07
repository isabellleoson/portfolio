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
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    margin-left: 40px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 150px;
        margin-right: 150px;
    }
`;

const Div = styled.div`
    display: flex;
`;

const StyledFirstPContainer = styled.div`
    display: flex;
    flex-direction: column;
    // max-width: 600px;
    align-items: center;
    justify-content: center;

    // @media (min-width: 750px) {
    //     max-width: 100%;
    //     padding-left: 150px;
    //     padding-right: 150px;
    // }
`;

const SecondP = styled.p``;

const Span = styled.span`
    font-size: 15px;
`;

const A = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Glasskiosken() {
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>Glasskiosken</h1>
                <h2>HTML / CSS</h2>
                <h2>Grid layout / Responsive design</h2>
            </HeadingDiv>
            <Container>
                <Div>
                    <StyledFirstPContainer>
                        <p>
                            <Span>This was my very first time coding.</Span> The
                            project is build with only HTML and CSS. I wanted to
                            create a fun, colorful site that makes you happy.
                            The website is build "mobile first", and accordning
                            to Google's SEO recommendations and accessibility
                            recommendations, with a focus on making semantic
                            code.{" "}
                        </p>
                        <SecondP>
                            <Span>This thought me </Span>to write clear code. I
                            used prettier for making the code look good. This
                            also thought me that grid is fine, but I never used
                            it since. I heart Flexbox. And the hover-effects?
                            Well, I thought that it would be good for someone
                            with visual impairment, but instead it just made
                            everything look like links. I would not have done
                            that today!
                        </SecondP>
                    </StyledFirstPContainer>

                    <ImgDiv>
                        <Img src={glasskiosk} alt="" />
                    </ImgDiv>
                </Div>

                <A href="">Link to Glasskiosken</A>
            </Container>{" "}
        </>
    );
}

export default Glasskiosken;
