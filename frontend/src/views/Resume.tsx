import { useState } from "react";
import styled, { keyframes } from "styled-components";

import MiniNavbar from "../components/MiniNavbar";
import Footer from "../components/Footer";
const H2 = styled.h2`
    padding-top: 25px;
    border-bottom: solid rgb(195, 170, 154) 1px;
    margin-left: 12px;
    color: rgb(195, 170, 154);
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadingText = styled.div`
    opacity: 0;
    animation: ${fadeInFromLeft} 1s ease forwards;
`;

const WidthContainer = styled.div`
    max-width: 600px;
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

const Container = styled.div`
    @media (min-width: 750px) {
        width: 98vw;
        justify-content: end;
        align-items: flex-end;
        text-align: end;

        // padding-right: 100px;
        display: flex;
        flex-direction: column;
    }
`;

const ContentContainer = styled.div`
    // max-width: 600px;
    width: 320px;

    @media (min-width: 750px) {
        display: flex;
        justify-content: end;
        align-items: flex-end;
        text-align: end;
        margin-right: 200px;
        width: 620px;
    }
`;

const Header = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-top: 40px;
    // padding-right: 40px;

    @media (min-width: 750px) {
        // max-width: 900px;
        margin-right: 200px;
        margin-left 300px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0;
    // align-items: flex-end;
    // justify-content: end;
    width: 320px;

    @media (min-width: 750px) {
        margin-right: 200px;

        width: 800px;
        // margin-right: 200px;
        // justify-content: end;
        // margin: 0px 0px 0px 260px;
    }
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    text-align: end;

    @media (min-width: 750px) {
        max-width: 840px;
    }
`;

const Span = styled.span`
    font-size: 16px;
    color: rgb(195, 170, 154);
`;

const P = styled.p`
    font-size: 14px;
    margin-left: 10px;
    background-color: rgba(67, 53, 49, 0.4);
`;

const Ul = styled.ul`
    max-width: 400px;
`;

const ResumeLi = styled.li`
    display: flex;
    flex-direction: column;
    // align-items: flex-end;

    text-align: end;

    margin-left: 50px;

    max-width: 100%;

    padding: 10px;
`;

const InResumeLi = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding-top: 5px;
    text-align: end;
    margin-left: 50px;
    padding-right: 10px;
`;

const Button = styled.button`
    background-color: white;
    margin: 10px;
    max-width: auto;
    max-height: auto;
    font-size: 11px;
    padding: 2px 8px;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    color: rgb(240, 232, 227);
    background-color: #1a1a1a;
    margin-right: 0;

    @media (min-width: 750px) {
        padding: 6px 12px;
        font-size: 12px;
    }
`;

const TechicalContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    text-align: end;
    @media (min-width: 750px) {
        margin-left: 350px;
    }
`;

const FooterContainer = styled.div`
    margin-top: 100px;
    @media (min-width: 750px) {
        margin-top: 200px;
    }
`;

function Resume() {
    const [showAbout, setShowAbout] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);
    const [showSecondParagraph, setShowSecondParagraph] = useState(false);
    const [showThirdParagraph, setShowThirdParagraph] = useState(false);

    const toggleAbout = () => {
        setShowAbout(!showAbout);
        setShowParagraph(false);
        setShowSecondParagraph(false);
        setShowThirdParagraph(false);
    };

    const toggleParagraph = () => {
        setShowAbout(false);
        setShowParagraph(!showParagraph);
        setShowSecondParagraph(false);
        setShowThirdParagraph(false);
    };

    const toggleSecondParagraph = () => {
        setShowAbout(false);
        setShowParagraph(false);
        setShowSecondParagraph(!showSecondParagraph);
        setShowThirdParagraph(false);
    };

    const toggleThirdParagraph = () => {
        setShowAbout(false);
        setShowParagraph(false);
        setShowSecondParagraph(false);
        setShowThirdParagraph(!showThirdParagraph);
    };

    return (
        <>
            <WidthContainer>
                <Container>
                    {/* <Li>
                        <Link className="link" to="/devprojects">
                            back.
                        </Link>
                    </Li> */}
                    <MiniNavbar />
                    <Header>
                        <H2>Resumé.</H2>
                    </Header>
                    <FadingText>
                        <ButtonContainer>
                            <Button onClick={toggleAbout}>
                                {showAbout ? "About Isabell" : "About Isabell"}
                            </Button>

                            <Button onClick={toggleParagraph}>
                                {showParagraph
                                    ? "Work Experience"
                                    : "Work Experience"}
                            </Button>

                            <Button onClick={toggleSecondParagraph}>
                                {showSecondParagraph
                                    ? "Technical Skills"
                                    : "Technical Skills "}
                            </Button>

                            <Button onClick={toggleThirdParagraph}>
                                {showThirdParagraph ? "Education" : "Education"}
                            </Button>
                        </ButtonContainer>
                    </FadingText>
                    <ContentContainer>
                        {showAbout && (
                            <>
                                <AboutContainer>
                                    <FadingText>
                                        <H2>About Isabell</H2>
                                        <P>
                                            <Span>Hello</Span>, I'm Isabell, a
                                            versatile professional with a{" "}
                                            <Span>
                                                passion for healthcare, artistic
                                                expression, and technology
                                            </Span>
                                            . With a solid foundation as an
                                            assistant nurse and a background in
                                            painting, I am currently harnessing
                                            my creativity and determination to
                                            embark on an exciting journey as a
                                            frontend developer.
                                        </P>
                                    </FadingText>
                                    <FadingText>
                                        <P>
                                            For over 12 years, I honed my
                                            interpersonal and caregiving skills
                                            as an <Span>assistant nurse</Span>.
                                            This experience not only allowed me
                                            to get a deep sense of empathy and a
                                            commitment to making a positive
                                            impact on people's lives, but also
                                            experiences (and interest) of the
                                            digitalization of healthcare, witch
                                            led to my current career change.
                                        </P>
                                    </FadingText>

                                    <FadingText>
                                        <P>
                                            Beyond the healthcare field, I
                                            explored my artistic inclinations as
                                            a <Span>painting artist</Span>. This
                                            endeavor cultivated my{" "}
                                            <Span>
                                                eye for detail, innovative
                                                thinking, and the ability to
                                                transform abstract concepts into
                                                tangible creations
                                            </Span>
                                            . These artistic skills have
                                            seamlessly translated into my
                                            pursuit of becoming a skilled
                                            Frontend Developer.
                                        </P>
                                    </FadingText>

                                    <FadingText>
                                        <P>
                                            Currently enrolled as a Frontend
                                            Developer student, I am excited to
                                            leverage my diverse background to
                                            bring a unique perspective to the
                                            world of web development. My
                                            experience as an assistant nurse
                                            taught me the value of{" "}
                                            <Span>
                                                precision, adaptability, and
                                                teamwork
                                            </Span>
                                            —qualities that resonate in the
                                            realm of coding and design.
                                        </P>
                                    </FadingText>

                                    <FadingText>
                                        <P>
                                            As a dedicated learner and aspiring
                                            developer, I am committed to
                                            continuous growth and enhancing my
                                            technical expertise. My goal is to{" "}
                                            <Span>
                                                merge my passion for aesthetics,
                                                problem-solving, and
                                                user-centric design
                                            </Span>{" "}
                                            to craft seamless and captivating
                                            digital experiences.
                                        </P>
                                    </FadingText>

                                    <FadingText>
                                        <P>
                                            I am eagerly seeking opportunities
                                            to apply my skills and embark on a
                                            new chapter in my career journey.
                                            With a solid foundation in
                                            healthcare, a flair for artistic
                                            expression, and{" "}
                                            <Span>
                                                a drive to excel as a Frontend
                                                Developer
                                            </Span>
                                            , I am excited to contribute my
                                            unique perspective and dedication to
                                            any innovative team.
                                        </P>
                                    </FadingText>
                                </AboutContainer>
                            </>
                        )}

                        {showParagraph && (
                            <FadingText>
                                <Ul>
                                    <ResumeLi>
                                        Morängatans elderly care, Gothenburg -
                                        2012-2012. Assistant nurse
                                    </ResumeLi>
                                    <ResumeLi>
                                        La Gran Becca, Cervinia, Italy. Winter
                                        season work 2013-2015. Bartender/barista
                                    </ResumeLi>
                                    <ResumeLi>
                                        Tallgläntan short term home, rehab,
                                        Falkenberg 2015-2022. Assistant nurse
                                    </ResumeLi>
                                    <ResumeLi>
                                        Kommunal & LO trade union, Elected
                                        representative. Falkenberg/Värnamo/
                                        Gothenburg/Stockholm. 2016-2019.{" "}
                                    </ResumeLi>
                                    <InResumeLi>
                                        - Responsible for youth questions with
                                        responsibilities within the whole
                                        organization. I worked both locally and
                                        at the head office. This has for example
                                        included arrangeing courses to educate
                                        new representavies.{" "}
                                    </InResumeLi>
                                    <InResumeLi>
                                        - School informant. Conducted courses
                                        for high school students, adult
                                        learners, and Swedish for Immigrants
                                        (SFI) students about the Swedish model
                                        and the Swedish labor market.
                                    </InResumeLi>
                                    <ResumeLi>
                                        IssaJosephine Art, 2020 - on going. My
                                        own company as an painting artist{" "}
                                    </ResumeLi>
                                </Ul>
                            </FadingText>
                        )}

                        {showSecondParagraph && (
                            <FadingText>
                                <TechicalContainer>
                                    <p>
                                        HTML / CSS / JAVASCRIPT / TYPESCRIPT /
                                        VUE / REACT / VITE / NODE.JS
                                    </p>
                                    <p>
                                        MongoDB / SQLite / PostgreSQL / EXPRESS{" "}
                                    </p>
                                    <p>
                                        GRID LAYOUT / FLEXBOX LAYOUT /
                                        RESPONSIVE DESIGN / FIGMA / BOOTSTRAP
                                    </p>

                                    <p>
                                        During my education I've also worked
                                        with agile methods such as Scrum.
                                    </p>
                                </TechicalContainer>
                            </FadingText>
                        )}

                        {showThirdParagraph && (
                            <FadingText>
                                <ul>
                                    <ResumeLi>
                                        Frontend Developer, IT-Högskolan
                                        Gothenburg, 2022 - on going
                                    </ResumeLi>
                                    <ResumeLi>
                                        Portfolio och graphic design 15hp,
                                        University of Borås 2023
                                    </ResumeLi>
                                    <ResumeLi>
                                        Fashion sketching and illustation 15hp,
                                        University of Borås 2021
                                    </ResumeLi>

                                    <ResumeLi>
                                        Occupational psychology and health 15hp,
                                        University of Halmstad 2015
                                    </ResumeLi>
                                    <ResumeLi>
                                        Caregiving Program, assistans nurse with
                                        a specialization in healthcare.
                                        Göteborgs Praktiska (high school)
                                        2009-2012
                                    </ResumeLi>
                                </ul>
                            </FadingText>
                        )}
                    </ContentContainer>
                    <FooterContainer>
                        <Footer />
                    </FooterContainer>
                </Container>
            </WidthContainer>
        </>
    );
}

export default Resume;
