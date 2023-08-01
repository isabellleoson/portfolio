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

function InspoSite() {
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>Inspirationssidan</h1>
                <h2>NATIVE JAVASCRIPT</h2>
                <h2> API / CHART.JS </h2>
            </HeadingDiv>
            <StyledFirstPContainer>
                <p>
                    <Span>
                        This project was the first time I tried out Javascript.
                        Love at first sight?
                    </Span>{" "}
                    Yes. The misson was to use API. I used two different API:s,
                    one for getting colors and one for getting images. We also
                    needed to fetch from a cities-api where and I created
                    functions to add, change and delete cities.
                </p>
                <ImgDiv>
                    <Img src={insposite} alt="" />
                    <Img src={cities} alt="" />
                </ImgDiv>
            </StyledFirstPContainer>
            <p>
                <Span>This thought me </Span>to
            </p>
            <A href="">Link to Inspirationssidan</A>{" "}
        </>
    );
}

export default InspoSite;
