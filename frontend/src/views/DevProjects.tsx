import styled from "styled-components";
import { Link } from "react-router-dom";

import DevNavbar from "../components/DevNavbar";

const Li = styled.div`
    display: flex;
    justify-content: end;
    font-size: 10px;

    @media (min-width: 750px) {
        padding: 20px;
    }
`;
const H1 = styled.h1`
    margin-bottom: 0;

    @media (min-width: 750px) {
        margin-top: 0;
        font-size: 25px;
    }
`;
const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    margin-left: 70px;
    margin-bottom: 40px;

    @media (min-width: 750px) {
        font-size: 14px;
        max-width: 320px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;

    @media (min-width: 750px) {
        padding: 20px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;

    @media (min-width: 750px) {
        padding-right: 20px;
    }
    // padding-top: 40px;
    // padding-right: 40px;
`;

function DevProjects() {
    return (
        <>
            <Li>
                <Link className="link" to="/">
                    Home.
                </Link>
            </Li>
            <Header>
                <Div>
                    <H1>Frontend Development.</H1>
                    <P>
                        These are the projects I've created during my first year
                        as a student at IT-Högskolan in Gothenburg.
                    </P>
                </Div>
            </Header>
            <DevNavbar />
        </>
    );
}

export default DevProjects;
