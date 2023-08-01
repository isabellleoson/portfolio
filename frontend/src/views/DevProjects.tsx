import styled from "styled-components";
import { Link } from "react-router-dom";

import DevNavbar from "../components/DevNavbar";

const Li = styled.div`
    display: flex;
    justify-content: end;
    font-size: 10px;
`;
const H1 = styled.h1`
    margin-bottom: 0;
`;
const P = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    margin-left: 70px;
    margin-bottom: 40px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;

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
                        Theese are the projects I've created during my first
                        year as a student at IT-Högskolan in Gothenburg.
                    </P>
                </Div>
            </Header>
            <DevNavbar />
        </>
    );
}

export default DevProjects;
