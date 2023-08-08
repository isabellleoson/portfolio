import { useState } from "react";

import styled, { keyframes } from "styled-components";

const H1 = styled.h1``;

import { Link } from "react-router-dom";

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

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-top: 40px;
    // padding-right: 40px;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
`;

const Li = styled.div`
    display: flex;
    justify-content: end;
    // padding: 5px;
`;

const ResumeLi = styled.li`
    display: flex;
    flex-direction: column;
    text-align: end;

    padding: 10px;
`;

const InResumeLi = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding-top: 5px;
    text-align: end;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 0;
    // align-items: flex-end;
    // justify-content: end;
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
`;

const TechicalContainer = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
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
            <Li>
                <Link className="link" to="/devprojects">
                    back.
                </Link>
            </Li>
            <Header>
                <H1>Resumé.</H1>
            </Header>
            <ButtonContainer>
                <Button onClick={toggleAbout}>
                    {showAbout ? "" : "About Isabell"}
                </Button>

                <Button onClick={toggleParagraph}>
                    {showParagraph ? "" : "Work experience"}
                </Button>

                <Button onClick={toggleSecondParagraph}>
                    {showSecondParagraph ? "" : "Technical Skills "}
                </Button>

                <Button onClick={toggleThirdParagraph}>
                    {showThirdParagraph ? "" : "Education"}
                </Button>
            </ButtonContainer>

            {showAbout && (
                <>
                    <AboutContainer>
                        <FadingText>
                            <p>About Isabell</p>
                            <p>
                                Hello, I'm Isabell, a versatile professional
                                with a passion for healthcare, artistic
                                expression, and technology. With a solid
                                foundation as an assistant nurse and a
                                background in painting, I am currently
                                harnessing my creativity and determination to
                                embark on an exciting journey as a Frontend
                                Developer student.
                            </p>
                        </FadingText>
                        <FadingText>
                            <p>
                                For over 12 years, I honed my interpersonal and
                                caregiving skills as an assistant nurse. This
                                experience not only allowed me to provide
                                essential medical support but also instilled in
                                me a deep sense of empathy and a commitment to
                                making a positive impact on people's lives.
                            </p>
                        </FadingText>

                        <FadingText>
                            <p>
                                Beyond the healthcare field, I explored my
                                artistic inclinations as a painting artist. This
                                endeavor cultivated my eye for detail,
                                innovative thinking, and the ability to
                                transform abstract concepts into tangible
                                creations. These artistic skills have seamlessly
                                translated into my pursuit of becoming a skilled
                                Frontend Developer.
                            </p>
                        </FadingText>

                        <FadingText>
                            <p>
                                Currently enrolled as a Frontend Developer
                                student, I am excited to leverage my diverse
                                background to bring a unique perspective to the
                                world of web development. My experience as an
                                assistant nurse taught me the value of
                                precision, adaptability, and teamwork—qualities
                                that resonate in the realm of coding and design.
                            </p>
                        </FadingText>

                        <FadingText>
                            <p>
                                As a dedicated learner and aspiring developer, I
                                am committed to continuous growth and enhancing
                                my technical expertise. My goal is to merge my
                                passion for aesthetics, problem-solving, and
                                user-centric design to craft seamless and
                                captivating digital experiences.
                            </p>
                        </FadingText>

                        <FadingText>
                            <p>
                                I am eagerly seeking opportunities to apply my
                                skills and embark on a new chapter in my career
                                journey. With a solid foundation in healthcare,
                                a flair for artistic expression, and a drive to
                                excel as a Frontend Developer, I am excited to
                                contribute my unique perspective and dedication
                                to any innovative team.
                            </p>
                        </FadingText>
                    </AboutContainer>
                </>
            )}

            {showParagraph && (
                <FadingText>
                    <ul>
                        <ResumeLi>
                            Morängatans elderly care, Gothenburg - 2012-2012.
                            Assistant nurse
                        </ResumeLi>
                        <ResumeLi>
                            La Gran Becca, Cervinia, Italy. Winter season work
                            2013-2015. Bartender/barista
                        </ResumeLi>
                        <ResumeLi>
                            Tallgläntan short term home, rehab, Falkenberg
                            2015-2022. Assistant nurse
                        </ResumeLi>
                        <ResumeLi>
                            Elected representative Kommunal & LO,
                            Falkenberg/Värnamo/Gothenburg/Stockholm. 2016-2019.{" "}
                            <InResumeLi>
                                Youth responsible with responsibilities both
                                locally, at the department level, and centrally
                                within the organization. This has included tasks
                                such as conducting internal training sessions.{" "}
                            </InResumeLi>
                            <InResumeLi>
                                School presenter. Conducted courses for high
                                school students, adult learners, and Swedish for
                                Immigrants (SFI) students about the Swedish
                                model and the Swedish job market.
                            </InResumeLi>
                        </ResumeLi>
                        <ResumeLi>
                            IssaJosephine Art, 2020 - on going. My own company
                            as an painting artist{" "}
                        </ResumeLi>
                    </ul>
                </FadingText>
            )}

            {showSecondParagraph && (
                <FadingText>
                    <TechicalContainer>
                        <p>
                            HTML / CSS / JAVASCRIPT / TYPESCRIPT / VUE / REACT /
                            VITE / NODE.JS
                        </p>
                        <p>MongoDB / SQLite / EXPRESS </p>
                        <p>
                            GRID LAYOUT / FLEXBOX LAYOUT / RESPONSIVE DESIGN /
                            FIGMA / BOOTSTRAP
                        </p>

                        <p>
                            During my education I've also worked with agile
                            methods such as Scrum.
                        </p>
                    </TechicalContainer>
                </FadingText>
            )}

            {showThirdParagraph && (
                <FadingText>
                    <ul>
                        <ResumeLi>
                            Frontend Developer, IT-Högskolan Gothenburg, 2022 -
                            on going
                        </ResumeLi>
                        <ResumeLi>
                            Portfolio och graphic design 15hp, University of
                            Borås 2023
                        </ResumeLi>
                        <ResumeLi>
                            Fashion sketching and illustation 15hp, University
                            of Borås 2021
                        </ResumeLi>

                        <ResumeLi>
                            Occupational psychology and health 15hp, University
                            of Halmstad 2015
                        </ResumeLi>
                        <ResumeLi>
                            Caregiving Program, assistans nurse with a
                            specialization in healtcare. Göteborgs Praktiska
                            (high school) 2009-2012
                        </ResumeLi>
                    </ul>
                </FadingText>
            )}
        </>
    );
}

export default Resume;
