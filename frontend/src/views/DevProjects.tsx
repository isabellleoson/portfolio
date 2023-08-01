import styled from "styled-components";
import { Link } from "react-router-dom";

import DevNavbar from "../components/DevNavbar";

const Li = styled.div`
    display: flex;
    justify-content: end;
`;
const H1 = styled.h1``;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
                <H1>Frontend Development.</H1>
            </Header>
            <DevNavbar />
        </>
    );
}

export default DevProjects;
