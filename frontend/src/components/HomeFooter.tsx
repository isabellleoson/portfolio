import styled from "styled-components";

import copywrite from "../assets/copywrite.png";

const Container = styled.div`
    margin-bottom: 0;
`;

const Links = styled.div`
    margin-top: -110px;
    display: flex;
    justify-content: end;
    margin-right: 10px;

    @media (min-width: 750px) {
        margin-top: -80px;
        margin-left: 20px;

        // margin-bottom: 30px;
        display: flex;
        justify-content: start;
    }
`;

const Img = styled.img`
    width: 1%;
    height: 1%;
`;

const A = styled.a`
    font-size: 10px;
    margin-right: 10px;

    @media (min-width: 750px) {
        color: black;
        font-size: 12px;
    }
`;

const CopywriteDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 20px;
    padding: 0;

    @media (min-width: 750px) {
        // margin-top: 60px;
        display: flex;
        justify-content: start;
        margin-left: 20px;
        width: 20%;
        // height: 20%;
    }
`;

const P = styled.p`
    font-size: 8px;
    margin-left: 5px;

    @media (min-width: 750px) {
        color: black;
    }
`;

function HomeFooter() {
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
                    <Img
                        src={copywrite}
                        alt="copywrite"
                        style={{ width: "4%", height: "4%" }}
                    />
                    <P>Isabell Leoson 2023</P>
                </CopywriteDiv>
            </Container>
        </>
    );
}

export default HomeFooter;
