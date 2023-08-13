import styled from "styled-components";

import copywrite from "../assets/copywrite.png";

const Links = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
`;

const A = styled.a`
    font-size: 14px;
    margin-right: 10px;
`;

const CopywriteDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
`;

const P = styled.p`
    font-size: 10px;
    margin-left: 5px;
`;

function HomeFooter() {
    return (
        <>
            <Links>
                <A href="https://github.com/isabellleoson">Github</A>
                <A href="https://www.linkedin.com/in/isabell-leoson-52a908252/">
                    LinkedIn
                </A>
            </Links>
            <CopywriteDiv style={{ marginBottom: "50px", padding: "20px" }}>
                <img
                    src={copywrite}
                    alt=""
                    style={{ width: "6%", height: "6%" }}
                />

                <P>Isabell Leoson 2023</P>
            </CopywriteDiv>
        </>
    );
}

export default HomeFooter;
