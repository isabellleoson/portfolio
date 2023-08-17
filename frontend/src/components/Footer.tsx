import styled from "styled-components";

import FooterContact from "./FooterContact";

import copywrite from "../assets/copywrite.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        margin-top: -100px;
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
    margin-left: 10px;
`;

const CopywriteDiv = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // margin-top: -18px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

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
    width: 12px;
    height: 12px;
    @media (min-width: 750px) {
        width: 12px;
        height: 12px;
    }
`;

// const ContactDiv = styled.div`
//     text-align: end;
//     margin-top: 20px;
// `;

// const ContactP = styled.p`
//     font-size: 10px;
//     margin-top: -10px;
// `;

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
                {/* <ContactDiv>
                    <ContactP>isabell.leoson@gmail.com</ContactP>
                    <ContactP>073-9 132150</ContactP>
                </ContactDiv> */}
                <FooterContact />

                <CopywriteDiv>
                    <Img src={copywrite} alt="copywrite" />

                    <P>Isabell Leoson 2023</P>
                </CopywriteDiv>
            </Container>
        </>
    );
}

export default Footer;
