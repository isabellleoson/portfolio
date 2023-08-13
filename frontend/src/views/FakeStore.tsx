import styled from "styled-components";

import MiniNavbar from "../components/MiniNavbar";

import Carousel from "../components/Carousel";

import homestore from "../assets/homestore.png";
import loginstore from "../assets/loginstore.png";
import cardstore from "../assets/cardstore.png";
import cartstore from "../assets/cartstore.png";

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ImgDiv = styled.div`
    width: auto;
    margin-top: 10px;
    // padding-left: 30px;
    // margin: 10px;
`;

const Img = styled.img`
    max-width: 200px;
    // padding-left: 30px;
    // margin: 10px;

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

// const A = styled.a`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

function FakeStore() {
    const images = [
        {
            url: loginstore,
            caption: "A very simple login page to the shop",
        },
        {
            url: homestore,
            caption:
                "I used Vue router and a query parameter for the  'welcome'-message and the username",
        },
        {
            url: cardstore,
            caption:
                "I used an API to present the products and I stored the added products with Vuex.",
        },
        {
            url: cartstore,
            caption: "The custumers cart ",
        },
    ];
    return (
        <>
            <MiniNavbar />
            <HeadingDiv>
                <h1>FakeStore</h1>
                <h2>JAVASCRIPT / VUE</h2>
                <h2>SASS / Bootstrap /Responsive design /</h2>

                <ImgDiv>
                    <Img src={homestore} alt="" />
                </ImgDiv>
            </HeadingDiv>
            <Container>
                <Div>
                    <StyledFirstPContainer>
                        <p>
                            <Span>
                                This is a dynamic Vite-application, using Vue.
                                and the first time I used JavaScript with a
                                framework. This is also the first project I
                                published on Github.
                            </Span>
                        </p>

                        <Carousel images={images} />
                        <p>
                            <Span></Span>
                        </p>
                    </StyledFirstPContainer>
                </Div>
                {/* 
                <A href="">Link to Fake store</A> */}
            </Container>{" "}
        </>
    );
}

export default FakeStore;
