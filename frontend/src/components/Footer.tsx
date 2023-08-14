import styled from "styled-components";

import copywrite from "../assets/copywrite.png";

const Links = styled.div`
    margin-top: 140px;
    display: flex;
    justify-content: center;
    margin-left: 10px;

    @media (min-width: 750px) {
        margin-top: -100px;
        // margin-left: 100px;

        margin-bottom: 15px;
        display: flex;
        justify-content: end;
    }
`;

const A = styled.a`
    font-size: 12px;
    margin-right: 10px;
`;

const CopywriteDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -18px;

    @media (min-width: 750px) {
        margin-top: -35px;
        margin-left: 940px;
        width: 20%;
        // margin-bottom: 30px;
        display: flex;
        justify-content: end;
    }
`;

const P = styled.p`
    font-size: 8px;
    margin-left: 2px;
`;

function Footer() {
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

export default Footer;
