import styled from "styled-components";

import copywrite from "../assets/copywrite.png";

const Container = styled.div`
    margin-bottom: 0;
`;

const Links = styled.div`
    margin-top: -80px;
    display: flex;
    justify-content: start;
    margin-left: 10px;
`;

const A = styled.a`
    font-size: 10px;
    margin-right: 10px;
`;

const CopywriteDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 0;
`;

const P = styled.p`
    font-size: 8px;
    margin-left: 5px;
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
                    <img
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
