import styled from "styled-components";

import copywrite from "../assets/copywrite.png";

const Container = styled.div`
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        margin-top: -40px;
        padding-right: 20px;
    }
`;

const Links = styled.div`
    // margin-top: 140px;
    // display: flex;
    // justify-content: center;
    // margin-left: 10px;

    @media (min-width: 750px) {
        // margin-top: -100px;
        // margin-right: -20px;

        // margin-bottom: 25px;
        // display: flex;
        // justify-content: end;
    }
`;

const A = styled.a`
    font-size: 12px;
    // margin-right: 10px;
`;

const CopywriteDiv = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // margin-top: -18px;

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        // margin-left: 940px;
        // width: 20%;
        // // margin-bottom: 30px;
        // display: flex;
        // justify-content: end;
    }
`;

const Img = styled.img`
    @media (min-width: 750px) {
        width: 12px;
        height: 12px;
    }
`;

const P = styled.p`
    font-size: 8px;
    margin-left: 2px;
`;

function Footer() {
    return (
        <>
            <Container>
                <Links>
                    <A href="https://github.com/isabellleoson">Github</A>
                    <A href="https://www.linkedin.com/in/isabell-leoson-52a908252/">
                        LinkedIn
                    </A>
                </Links>
                <CopywriteDiv>
                    <Img src={copywrite} alt="copywrite" />

                    <P>Isabell Leoson 2023</P>
                </CopywriteDiv>
            </Container>
        </>
    );
}

export default Footer;
